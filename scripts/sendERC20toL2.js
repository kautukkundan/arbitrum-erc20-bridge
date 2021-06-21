import { BigNumber, ContractFactory, Wallet } from "ethers";
import { ethers } from "hardhat";
import { Bridge, L1ERC20Gateway__factory } from "arb-ts";
import { NodeInterface__factory } from "arb-ts/dist/lib/abi";

async function main() {
  const sender = "0xC96f6B72843Af1988C98F78eAB3E47673af63eA1";
  const stakeReceiver = "0x556502552938Bb7FBeb261551ABe02b9c8143805";

  const l1ERC20 = "0x84a25d03d9f207443be2b46de19073cec9f73ce9";
  const amount = ethers.utils.parseEther("10");

  const PK = process.env.PVT_KEY || "";
  const ethProvider = new ethers.providers.JsonRpcProvider(
    "https://eth-rinkeby.alchemyapi.io/v2/" + process.env.ALCHEMY_KEY,
  );
  const arbProvider = new ethers.providers.JsonRpcProvider("https://rinkeby.arbitrum.io/rpc");
  const NODE_INTERFACE_ADDRESS = "0x00000000000000000000000000000000000000C8";

  const l1TestWallet = new Wallet(PK, ethProvider);
  const l2TestWallet = new Wallet(PK, arbProvider);

  const bridge = await Bridge.init(l1TestWallet, l2TestWallet);

  const gasPriceBid = await arbProvider.getGasPrice();

  const expectedL1GatewayAddress = await bridge.l1Bridge.getGatewayAddress(l1ERC20);
  const l1Gateway = L1ERC20Gateway__factory.connect(expectedL1GatewayAddress, bridge.l1Bridge.l1Provider);

  const num = 17;
  const callHookData = ethers.utils.defaultAbiCoder.encode(["uint256"], [num]);

  const depositCalldata = await l1Gateway.getOutboundCalldata(
    l1ERC20,
    sender,
    stakeReceiver,
    amount.toString(),
    callHookData,
  );
  console.log({ depositCalldata });

  const maxSubmissionPriceIncreaseRatio = BigNumber.from(20);

  const maxSubmissionPrice = (await bridge.l2Bridge.getTxnSubmissionPrice(depositCalldata.length - 2))[0]
    .mul(maxSubmissionPriceIncreaseRatio)
    .div(BigNumber.from(10));

  const nodeInterface = NodeInterface__factory.connect(NODE_INTERFACE_ADDRESS, bridge.l2Bridge.l2Provider);

  const l2Dest = await l1Gateway.counterpartGateway();

  const maxGas = (
    await nodeInterface.estimateRetryableTicket(
      expectedL1GatewayAddress,
      ethers.utils.parseEther("0.05").toString(),
      l2Dest,
      0,
      maxSubmissionPrice,
      sender,
      sender,
      0,
      0,
      depositCalldata,
    )
  )[0];
  console.log("DONE ESTIMATING GAS", maxGas);

  const ethDeposit = await maxSubmissionPrice.add(gasPriceBid.mul(maxGas.toString()).toString());

  const data = ethers.utils.defaultAbiCoder.encode(["uint256", "bytes"], [maxSubmissionPrice, callHookData]);
  return bridge.l1GatewayRouter.functions.outboundTransfer(
    l1ERC20,
    stakeReceiver,
    amount.toString(),
    maxGas,
    gasPriceBid.toString(),
    data,
    { value: ethDeposit.toString() },
  );

  //   const depositRes = await bridge.deposit(
  //     "0x84a25d03d9f207443be2b46de19073cec9f73ce9",
  //     ethers.utils.parseEther("10"),
  //     {},
  //     "0x4f3A3B11C9E1ee8a4DFd6F9A230C20060B4Ea7e3",
  //     { gasLimit: 210000, gasPrice: ethers.utils.parseUnits("10", "gwei") },
  //   );
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

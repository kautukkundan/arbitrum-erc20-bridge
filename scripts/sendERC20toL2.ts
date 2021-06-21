import { BigNumber, ContractFactory } from "ethers";
import { ethers } from "hardhat";
import L2GatewayRouterContract from "../artifacts/contracts/tokenbridge/arbitrum/gateway/L2GatewayRouter.sol/L2GatewayRouter.json";
import ArbRetryableTx from "../artifacts/contracts/rpc-utils/ArbRetryableTx.sol/ArbRetryableTx.json";
import NodeInterface from "../artifacts/contracts/rpc-utils/NodeInterface.sol/NodeInterface.json";

async function main() {
  const l1GatewayAddress = "0x70C143928eCfFaf9F5b406f7f4fC28Dc43d68380";
  const l2GatewayAddress = "0x9413AD42910c1eA60c737dB5f58d1C504498a3cD";
  const nodeInterfaceAddress = "0x00000000000000000000000000000000000000C8";
  const erc20L1Address = "0x84a25d03d9f207443be2b46de19073cec9f73ce9";
  const sender = "0xC96f6B72843Af1988C98F78eAB3E47673af63eA1";
  const amount = ethers.utils.parseEther("90");
  const arbRetryAddress = "0x000000000000000000000000000000000000006E";

  // L1
  const L1GatewayRouter: ContractFactory = await ethers.getContractFactory("L1GatewayRouter");
  const l1Gateway = await L1GatewayRouter.attach(l1GatewayAddress);

  // L2
  const arbProvider = new ethers.providers.JsonRpcProvider("https://rinkeby.arbitrum.io/rpc");
  const l2Gateway = new ethers.Contract(l2GatewayAddress, L2GatewayRouterContract.abi, arbProvider);
  const nodeInterface = new ethers.Contract(nodeInterfaceAddress, NodeInterface.abi, arbProvider);

  const arbRetry = new ethers.Contract(arbRetryAddress, ArbRetryableTx.abi, arbProvider);
  const gasPriceBid = await arbProvider.getGasPrice();
  console.log(gasPriceBid.toString());

  // run
  const depositCalldata = await l1Gateway.getOutboundCalldata(erc20L1Address, sender, sender, amount, "0x");

  const maxSubmissionPriceIncreaseRatio = BigNumber.from(13);
  const maxSubmissionPrice = (await arbRetry.getSubmissionPrice(depositCalldata.length - 2))[0]
    .mul(maxSubmissionPriceIncreaseRatio)
    .div(BigNumber.from(10));

  const l2Dest = await l1Gateway.counterpartGateway();

  const maxGas = (
    await nodeInterface.estimateRetryableTicket(
      l1GatewayAddress,
      ethers.utils.parseEther("0.05"),
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
  console.log("DONE ESTIMATING GAS");

  // calculate required forwarding gas
  const ethDeposit = await maxSubmissionPrice.add(gasPriceBid.mul(maxGas));

  const data = ethers.utils.defaultAbiCoder.encode(["uint256", "bytes"], [maxSubmissionPrice, "0x"]);

  const tx = await l1Gateway.outboundTransfer(erc20L1Address, sender, amount, maxGas, gasPriceBid, data, {
    value: ethDeposit,
  });
  console.log(tx);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

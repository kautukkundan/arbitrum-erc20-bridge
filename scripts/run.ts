import { BigNumber, Contract } from "ethers";
import { Bridge } from "arb-ts";

import { ethers as ethersH } from "hardhat";
import { Wallet, ethers } from "ethers";
import { ETH_ERC20_BRIDGE_LIVE, ARB_TOKEN_BRIDGE_LIVE } from "./constants";

import arbRetry from "../artifacts/contracts/arbitrum/interfaces/IArbRetryableTx.sol/ArbRetryableTx.json";

async function main() {
  const EOA = "0xc96f6b72843af1988c98f78eab3e47673af63ea1";
  const TEST_ERC20 = "0x2bf2997d800f7bd3ab08db793cad70ebb2e3c10d";

  //   const testToken = await ethersH.getContractAt("TestERC20", TEST_ERC20);
  //   const balance = await testToken.balanceOf(EOA);
  //   console.log(balance.toString());
  const gasPriceL1 = await ethersH.provider.getGasPrice();

  const ethErc20Bridge = await ethersH.getContractAt("IEthERC20Bridge", ETH_ERC20_BRIDGE_LIVE);

  const amount = ethers.utils.parseEther("11");

  const [isDeployed, depositCalldata] = await ethErc20Bridge.getDepositCalldata(TEST_ERC20, EOA, EOA, amount, "0x");

  const l2provider = new ethers.providers.JsonRpcProvider("https://kovan5.arbitrum.io/rpc");

  const gasPriceBid = await l2provider.getGasPrice();

  const expectedGas = await l2provider.estimateGas({
    from: ETH_ERC20_BRIDGE_LIVE,
    to: ARB_TOKEN_BRIDGE_LIVE,
    data: depositCalldata,
  });

  const maxSubmissionPriceIncreaseRatio = BigNumber.from(13);

  const ARB_RETRY_ADDRESS = "0x000000000000000000000000000000000000006E";
  const arbRety: Contract = new ethers.Contract(ARB_RETRY_ADDRESS, arbRetry.abi, l2provider);

  const maxSubmissionPrice = (await arbRety.getSubmissionPrice(depositCalldata.length - 2))[0]
    .mul(maxSubmissionPriceIncreaseRatio)
    .div(BigNumber.from(10));

  const ethDeposit = await maxSubmissionPrice.add(gasPriceBid.mul(expectedGas));

  const tx = await ethErc20Bridge.deposit(TEST_ERC20, EOA, amount, maxSubmissionPrice, expectedGas, gasPriceBid, "0x", {
    gasLimit: 210000,
    gasPrice: gasPriceL1,
    value: ethDeposit,
  });

  const depositRec = await tx.wait();
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

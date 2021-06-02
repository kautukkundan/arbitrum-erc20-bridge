import { ethers } from "hardhat";
import { Contract, ContractFactory } from "ethers";
import { ARB_TOKEN_BRIDGE, ETH_ERC20_BRIDGE, STD_ERC20, ETH_INBOX } from "../constants";

async function main(): Promise<void> {
  const ethbridge: Contract = await ethers.getContractAt("EthERC20Bridge", ETH_ERC20_BRIDGE);
  await ethbridge.initialize(ETH_INBOX, ARB_TOKEN_BRIDGE, STD_ERC20, {
    value: ethers.utils.parseEther("0.0001"),
  });
  console.log("ethBridge init");
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });

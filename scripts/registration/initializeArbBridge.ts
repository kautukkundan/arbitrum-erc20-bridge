import { ethers } from "hardhat";
import { Contract } from "ethers";
import { ARB_TOKEN_BRIDGE, ETH_ERC20_BRIDGE, STD_ERC20 } from "../constants";

async function main(): Promise<void> {
  const arbbridge: Contract = await ethers.getContractAt("ArbTokenBridge", ARB_TOKEN_BRIDGE);
  await arbbridge.initialize(ETH_ERC20_BRIDGE, STD_ERC20);
  console.log("arbBridge init");
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });

import { ethers } from "hardhat";
import { ARB_TOKEN_BRIDGE } from "./constants";

async function main(): Promise<void> {
  const arbBridge = await ethers.getContractAt("EthERC20Bridge", "0x1387A12276195FE462bb9608eD470a72830256Ef");
  const L1Token = "0x3b0eB1E65639ff94167Ea13F2E6EEc51103f77cc";
  const address = await arbBridge.calculateL2TokenAddress(L1Token);
  console.log(address);
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });

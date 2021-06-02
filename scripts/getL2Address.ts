import { ethers } from "hardhat";
import { ARB_TOKEN_BRIDGE } from "./constants";

async function main(): Promise<void> {
  const arbBridge = await ethers.getContractAt("IArbTokenBridge", "0x5DfBB3D6775B7D0e702D6c9Ccd1fCF4Ba08DA97c");
  const L1Token = "0x67738AfC12d4291507b2be116c6F95c24507840C";
  const address = await arbBridge.calculateL2TokenAddress(L1Token);
  console.log(address);
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });

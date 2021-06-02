import { ethers } from "hardhat";
import { Contract, ContractFactory } from "ethers";

async function main(): Promise<void> {
  let balance = await ethers.provider.getBalance("0x81183C9C61bdf79DB7330BBcda47Be30c0a85064");
  console.log(balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });

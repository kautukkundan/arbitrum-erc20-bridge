import { ethers } from "hardhat";

async function main() {
  const StakeReceiver = await ethers.getContractFactory("StakeReceiver");
  const stakeReceiver = await StakeReceiver.deploy();

  await stakeReceiver.deployed();
  console.log("contract deployed to:", stakeReceiver.address); //0x556502552938Bb7FBeb261551ABe02b9c8143805
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

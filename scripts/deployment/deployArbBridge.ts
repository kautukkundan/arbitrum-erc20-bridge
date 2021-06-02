import { ethers } from "hardhat";
import { Contract, ContractFactory } from "ethers";

async function main(): Promise<void> {
  const ArbBridgeFactory: ContractFactory = await ethers.getContractFactory("ArbTokenBridge");
  const bridge: Contract = await ArbBridgeFactory.deploy();
  await bridge.deployed();
  console.log("arb bridge deployed to: ", bridge.address);
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });

import { ethers } from "hardhat";
import { Contract, ContractFactory } from "ethers";

async function main(): Promise<void> {
  const EthBridgeFactory: ContractFactory = await ethers.getContractFactory("EthERC20Bridge");
  const bridge: Contract = await EthBridgeFactory.deploy();
  await bridge.deployed();
  console.log("eth bridge deployed to: ", bridge.address);
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });

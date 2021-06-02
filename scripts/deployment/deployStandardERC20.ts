import { ethers } from "hardhat";
import { Contract, ContractFactory } from "ethers";

async function main(): Promise<void> {
  const StandardArbERC20Factory: ContractFactory = await ethers.getContractFactory("StandardArbERC20");
  const stdErc20: Contract = await StandardArbERC20Factory.deploy();
  await stdErc20.deployed();
  console.log("StandardArbERC20Factory deployed to: ", stdErc20.address);
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });

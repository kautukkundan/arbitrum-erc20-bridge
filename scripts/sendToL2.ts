import { Contract } from "@ethersproject/contracts";
import { ethers } from "hardhat";

async function main(): Promise<void> {
  const ARB_RETRY_ADDRESS = "0x000000000000000000000000000000000000006E";
  const arbRety: Contract = await ethers.getContractAt("ArbRetryableTx", ARB_RETRY_ADDRESS);
  await arbRety.redeem("0xa39c9494fc307a457addba7a422937e89d91322264e4ed0675904b48a98d1ee7", { gasLimit: 210000 });
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });

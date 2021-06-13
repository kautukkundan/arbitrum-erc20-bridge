import { Contract } from "@ethersproject/contracts";
import { ethers } from "hardhat";

async function main(): Promise<void> {
  const ARB_RETRY_ADDRESS = "0x000000000000000000000000000000000000006E";
  const arbRety: Contract = await ethers.getContractAt("ArbRetryableTx", ARB_RETRY_ADDRESS);
  await arbRety.redeem("0xf2985ccfeb636eecb8a0695ce856d712c8fb4e6ba2c89c3e7dd9d1d3e4d5708c", {
    gasLimit: 2100000,
  });
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });

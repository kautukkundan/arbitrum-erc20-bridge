import { ethers } from "hardhat";
import { Contract } from "ethers";
import { ARB_TOKEN_BRIDGE } from "./constants";

async function main(): Promise<void> {
  //   const arbBridge = await ethers.getContractAt("IArbTokenBridge", ARB_TOKEN_BRIDGE);
  //   const L1Token = "0x1c3bEbadaa310CbC018B0D4453215FE568EA2968";
  //   await arbBridge.migrate(
  //     L1Token,
  //     "0x81183C9C61bdf79DB7330BBcda47Be30c0a85064",
  //     "0x81183C9C61bdf79DB7330BBcda47Be30c0a85064",
  //     ethers.utils.parseEther("100"),
  //     {
  //       gasLimit: 6718946,
  //     },
  //   );

  const Erc20 = await ethers.getContractFactory("StandardArbERC20");
  const erc20 = Erc20.attach("0xAfAD5ACf8bF17aF2c22322b3D64e7c5c3AeEa6eC");

  //   await erc20.migrate("0xC96f6B72843Af1988C98F78eAB3E47673af63eA1", ethers.utils.parseEther("100"));

  const balance = await erc20.balanceOf("0x81183C9C61bdf79DB7330BBcda47Be30c0a85064");
  console.log(balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });

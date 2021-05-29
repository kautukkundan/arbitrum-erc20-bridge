import { ethers } from "hardhat";
import { Contract } from "@ethersproject/contracts";

describe("L1 to L2 transfer ETH", () => {
  it("should transfer eth from ethereum to arbitrum", async function () {
    // const inbox: Contract = await ethers.getContractAt("IInbox", "0xd3b925Dbd7272FA5a4aC88602923fD889616a1A9");

    // let balanceInitial = await ethers.provider.getBalance(await inbox.bridge());
    // console.log(balanceInitial.toString());

    // await inbox.depositEth("0x81183C9C61bdf79DB7330BBcda47Be30c0a85064", {
    //   value: ethers.utils.parseEther("2"),
    // });

    // let balanceFinal = await ethers.provider.getBalance(await inbox.bridge());
    // console.log(balanceFinal.toString());

    const ARB_SYS_ADDRESS = "0x0000000000000000000000000000000000000064";
    const arbSys: Contract = await ethers.getContractAt("ArbSys", ARB_SYS_ADDRESS);
    await arbSys.withdrawEth("0x81183C9C61bdf79DB7330BBcda47Be30c0a85064");
  });
});

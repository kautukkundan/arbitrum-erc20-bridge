import { ethers } from "hardhat";
import { Contract } from "@ethersproject/contracts";

describe("L1 to L2 transfer ETH", () => {
  it("should transfer eth from ethereum to arbitrum", async function () {
    const INBOX = "0x76bF1345224fE606E2aB38B8E52B83512328A9DF";
    const inbox: Contract = await ethers.getContractAt("IInbox", INBOX);
    await inbox.depositEth("0x81183C9C61bdf79DB7330BBcda47Be30c0a85064", {
      value: ethers.utils.parseEther("1"),
    });
  });
});

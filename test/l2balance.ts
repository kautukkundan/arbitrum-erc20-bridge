import { ethers } from "hardhat";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { Contract, ContractFactory } from "@ethersproject/contracts";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
chai.use(chaiAsPromised);

const { expect, assert } = chai;

describe("Token", () => {
  let arbBridge: Contract;

  it("should deploy bridge", async function () {
    const ArbTokenBridgeFactory: ContractFactory = await ethers.getContractFactory("ArbTokenBridge");
    arbBridge = await ArbTokenBridgeFactory.deploy();
  });

  it("should get erc20 address", async function () {
    const L1Token = "0x0245Cb859eb4D63C3A4503C2E8193a7418b32FE1";
    const address = await arbBridge.calculateL2TokenAddress(L1Token);
    console.log(address);
  });
});

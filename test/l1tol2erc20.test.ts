import { ethers } from "hardhat";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { Contract, ContractFactory } from "@ethersproject/contracts";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
chai.use(chaiAsPromised);

const { expect, assert } = chai;

describe("Token", () => {
  let ethBridge: Contract;
  let token: Contract;
  let deployer: SignerWithAddress;
  let deployerAddress: string;

  it("should deploy token", async function () {
    [deployer] = await ethers.getSigners();
    deployerAddress = await deployer.getAddress();

    const TokenFactory: ContractFactory = await ethers.getContractFactory("TestERC20");
    token = await TokenFactory.deploy();
    console.log({ token: token.address });

    let balance = await token.balanceOf(await deployer.getAddress());
    expect(balance).to.equal(ethers.BigNumber.from("50000000"));
  });

  it("should deploy bridge", async function () {
    const EthERC20BridgeFactory: ContractFactory = await ethers.getContractFactory("EthERC20Bridge");
    ethBridge = await EthERC20BridgeFactory.deploy();
  });

  it("send token to L2", async function () {
    const tokenAmount = ethers.utils.parseEther("10");
    await token.approve(ethBridge.address, tokenAmount);

    const maxSubmissionCost = 0;
    const maxGas = 1000000000;
    const gasPrice = 0;
    await ethBridge.deposit(token.address, deployerAddress, tokenAmount, maxSubmissionCost, maxGas, gasPrice, "0x", {
      gasLimit: 6718946,
    });
  });
});

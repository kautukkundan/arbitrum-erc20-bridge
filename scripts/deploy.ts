// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import { Contract, ContractFactory } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

async function main(): Promise<void> {
  // Hardhat always runs the compile task when running scripts through it.
  // If this runs in a standalone fashion you may want to call compile manually
  // to make sure everything is compiled
  // await run("compile");
  // We get the contract to deploy
  //   const TestTokenFactory: ContractFactory = await ethers.getContractFactory("TestToken");
  //   const testToken: Contract = await TestTokenFactory.deploy();
  //   await testToken.deployed();
  //   console.log("TestToken deployed to: ", testToken.address);
  //   let balance = await ethers.provider.getBalance("0xafddf9d6411030166e450e5ccb0401cccbc70ed1");
  //   console.log(balance.toString());
  //   const inbox: Contract = await ethers.getContractAt("IInbox", "0xd3b925Dbd7272FA5a4aC88602923fD889616a1A9");
  //   let tx = await inbox.depositEth("0xafddf9d6411030166e450e5ccb0401cccbc70ed1", {
  //     value: ethers.utils.parseEther("1"),
  //   });
  //   console.log(tx);
  //   let balance2 = await ethers.provider.getBalance("0x81183C9C61bdf79DB7330BBcda47Be30c0a85064");
  //   console.log(balance2.toString());
  //   const ARB_SYS_ADDRESS = "0x0000000000000000000000000000000000000064";
  //   const arbSys: Contract = await ethers.getContractAt("ArbSys", ARB_SYS_ADDRESS);
  //   const ExtractFactory: ContractFactory = await ethers.getContractFactory("Extract");
  //   const extract: Contract = await ExtractFactory.deploy();
  //   await extract.deployed();
  //   let b = await arbSys.arbBlockNumber();÷
  //   let tx = await arbSys.withdrawEth("0xafddf9d6411030166e450e5ccb0401cccbc70ed1", {
  //     value: ethers.utils.parseEther("0.5"),
  //   });
  //   console.log(b);

  let accounts: SignerWithAddress[];
  let TestBridge: ContractFactory;
  let testBridge: Contract;

  let inbox: Contract;
  const maxSubmissionCost = 0;
  const maxGas = 1000000000;
  const gasPrice = 0;
  const l2Template20 = "0x0000000000000000000000000000000000000020";
  const l2Address = "0x1100000000000000000000000000000000000011";
  const inboxAddress = "0xd3b925Dbd7272FA5a4aC88602923fD889616a1A9";

  accounts = await ethers.getSigners();

  TestBridge = await ethers.getContractFactory("EthERC20Bridge");
  testBridge = await TestBridge.deploy();

  await testBridge.initialize(inboxAddress, l2Template20, l2Address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });

import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import { ARB_TOKEN_BRIDGE, ETH_ERC20_BRIDGE, TEST_ERC20 } from "./constants";

async function main(): Promise<void> {
  const testToken = await ethers.getContractAt("TestERC20", TEST_ERC20);
  const balance = await testToken.balanceOf("0x81183C9C61bdf79DB7330BBcda47Be30c0a85064");
  console.log(balance.toString());

  await testToken.approve(ETH_ERC20_BRIDGE, balance);

  const ethErc20Bridge = await ethers.getContractAt("IEthERC20Bridge", ETH_ERC20_BRIDGE);

  const maxSubmissionCost = 1000000000;
  const maxGas = 1000000000;
  const gasPrice = ethers.utils.parseUnits("10", "gwei");
  const tokenAmount = ethers.utils.parseEther("100");
  const to = "0x81183C9C61bdf79DB7330BBcda47Be30c0a85064";

  const tx = await ethErc20Bridge.deposit(TEST_ERC20, to, tokenAmount, maxSubmissionCost, maxGas, gasPrice, "0x", {
    gasLimit: 210000,
    value: ethers.utils.parseEther("0.0005"),
  });

  // GET SEQ ID FROM EVENT DATA
  const depositRec = await tx.wait();

  const iface = ethErc20Bridge.interface;
  const event = iface.getEvent("DepositToken");
  const eventTopic = iface.getEventTopic(event);

  const logs = depositRec.logs.filter((log: any) => log.topics[0] === eventTopic);
  const logData = logs.map((log: any) => iface.parseLog(log).args);
  const seqNum = logData[0].seqNum;

  // GET REQ ID FROM SEQ ID
  const arbProvider = new ethers.providers.JsonRpcProvider("http://localhost:8547");
  const chainID = ethers.BigNumber.from((await arbProvider.getNetwork()).chainId);

  //   const first = ethers.utils.solidityKeccak256(["uint256", "uint256"], [chainID, seqNum]);
  //   const second = ethers.utils.solidityKeccak256(["bytes32", "uint256"], [first, 0]);

  //   console.log(second);

  const bitFlipSeqNum = (seqNum: BigNumber) => {
    return seqNum.or(BigNumber.from(1).shl(255));
  };

  const reqID = ethers.utils.keccak256(
    ethers.utils.concat([
      ethers.utils.zeroPad(chainID.toHexString(), 32),
      ethers.utils.zeroPad(bitFlipSeqNum(seqNum).toHexString(), 32),
    ]),
  );

  // GET redeemID
  const txId = ethers.utils.keccak256(
    ethers.utils.concat([ethers.utils.zeroPad(reqID, 32), ethers.utils.zeroPad(BigNumber.from(1).toHexString(), 32)]),
  );

  //   const r = await arbProvider.waitForTransaction(redeemID);

  console.log(txId);
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });

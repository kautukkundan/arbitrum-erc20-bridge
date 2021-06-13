import { BigNumber } from "ethers";
import { Bridge } from "arb-ts";

import { ethers as ethersH } from "hardhat";
import { Wallet, ethers } from "ethers";
import { ETH_ERC20_BRIDGE_LIVE, ARB_TOKEN_BRIDGE_LIVE } from "./constants";

async function main() {
  //   const testToken = await ethersH.getContractAt("TestERC20", TEST_ERC20);
  //   const balance = await testToken.balanceOf("0x81183C9C61bdf79DB7330BBcda47Be30c0a85064");
  //   console.log(balance.toString());

  //   await testToken.approve(ETH_ERC20_BRIDGE, balance);

  const ethProvider = new ethers.providers.JsonRpcProvider(
    "https://eth-kovan.alchemyapi.io/v2/-VA3WfZSrkLpo7Xg7p-0IN6B1MHEWfq2",
  );
  const arbProvider = new ethers.providers.JsonRpcProvider("https://kovan5.arbitrum.io/rpc");

  const l1TestWallet = new Wallet("0x6d31eae7ab13dd8a1c202f716f02a224468f2e0a779aac0c4ea0f242e070bd76", ethProvider);
  const l2TestWallet = new Wallet("0x6d31eae7ab13dd8a1c202f716f02a224468f2e0a779aac0c4ea0f242e070bd76", arbProvider);

  const bridge = new Bridge(ETH_ERC20_BRIDGE_LIVE, ARB_TOKEN_BRIDGE_LIVE, l1TestWallet, l2TestWallet);

  const depositRes = await bridge.deposit(
    "0xff795577d9ac8bd7d90ee22b6c1703490b6512fd",
    ethers.utils.parseEther("67"),
    {},
    undefined,
    { gasLimit: 210000, gasPrice: ethers.utils.parseUnits("10", "gwei") },
  );

  await depositRes.wait();

  //   const ethErc20Bridge = await ethers.getContractAt("IEthERC20Bridge", ETH_ERC20_BRIDGE);

  //   const maxSubmissionCost = 1000000000;
  //   const maxGas = 1000000000;
  //   const gasPrice = ethers.utils.parseUnits("20", "gwei");
  //   const tokenAmount = ethers.utils.parseEther("100");
  //   const to = "0x81183C9C61bdf79DB7330BBcda47Be30c0a85064";

  //   const tx = await ethErc20Bridge.deposit(TEST_ERC20, to, tokenAmount, maxSubmissionCost, maxGas, gasPrice, "0x", {
  //     gasLimit: 210000,
  //     value: ethers.utils.parseEther("0.01"),
  //   });

  //   // GET SEQ ID FROM EVENT DATA
  //   const depositRec = await tx.wait();

  //   const iface = ethErc20Bridge.interface;
  //   const event = iface.getEvent("DepositToken");
  //   const eventTopic = iface.getEventTopic(event);

  //   const logs = depositRec.logs.filter((log: any) => log.topics[0] === eventTopic);
  //   const logData = logs.map((log: any) => iface.parseLog(log).args);
  //   console.log(logData);

  //   const seqNum = logData[0].seqNum;

  //   // GET REQ ID FROM SEQ ID
  //   const arbProvider = new ethers.providers.JsonRpcProvider("http://localhost:8547");
  //   const chainID = ethers.BigNumber.from((await arbProvider.getNetwork()).chainId);

  //   console.log("chain ID", chainID.toString());

  //   const bitFlipSeqNum = (seqNum: BigNumber) => {
  //     return seqNum.or(BigNumber.from(1).shl(255));
  //   };

  //   const reqID = ethers.utils.keccak256(
  //     ethers.utils.concat([
  //       ethers.utils.zeroPad(chainID.toHexString(), 32),
  //       ethers.utils.zeroPad(bitFlipSeqNum(seqNum).toHexString(), 32),
  //     ]),
  //   );

  //   // GET redeemID
  //   const txId1 = ethers.utils.keccak256(
  //     ethers.utils.concat([ethers.utils.zeroPad(reqID, 32), ethers.utils.zeroPad(BigNumber.from(0).toHexString(), 32)]),
  //   );

  //   const txId2 = ethers.utils.keccak256(
  //     ethers.utils.concat([ethers.utils.zeroPad(reqID, 32), ethers.utils.zeroPad(BigNumber.from(1).toHexString(), 32)]),
  //   );

  //   //   const r = await arbProvider.waitForTransaction(redeemID);

  //   console.log({ txId1, txId2 });
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

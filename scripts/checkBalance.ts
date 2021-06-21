import { Wallet } from "ethers";
import { ethers } from "hardhat";

async function main() {
  const arbProvider = new ethers.providers.JsonRpcProvider("https://rinkeby.arbitrum.io/rpc");
  const ERC20abi = ["function balanceOf(address) view returns (uint)"];
  const Token = new ethers.Contract("0x7bFbD140E1078f9f530B4ab7e3382C3Cd587BC29", ERC20abi, arbProvider);

  const signer = new Wallet(process.env.PVT_KEY || "", arbProvider);

  const balance = await Token.balanceOf("0x556502552938Bb7FBeb261551ABe02b9c8143805");
  console.log("balance", ethers.utils.formatEther(balance));

  const StakeReceiver = await ethers.getContractFactory("StakeReceiver");
  const stakeReceiver = await StakeReceiver.attach("0x556502552938Bb7FBeb261551ABe02b9c8143805");

  const prevSender = await stakeReceiver.connect(signer).prevSender();
  console.log("prevSender", prevSender);

  const stake = await stakeReceiver.connect(signer).stakes(prevSender);
  console.log("stake", ethers.utils.formatEther(stake));

  const message = await stakeReceiver.connect(signer).customMessage(prevSender);
  console.log("custom message", message.toString());

  await stakeReceiver
    .connect(signer)
    .unstake(ethers.utils.parseEther("1"), "0x7bFbD140E1078f9f530B4ab7e3382C3Cd587BC29");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

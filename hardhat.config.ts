import { task } from "hardhat/config";

import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";
dotenvConfig({ path: resolve(__dirname, "./.env") });

import { HardhatUserConfig } from "hardhat/types";
import { NetworkUserConfig } from "hardhat/types";

import "@nomiclabs/hardhat-waffle";
import "hardhat-typechain";
import "hardhat-gas-reporter";
import "@nomiclabs/hardhat-etherscan";

const chainIds = {
  ganache: 1337,
  goerli: 5,
  hardhat: 31337,
  kovan: 42,
  mainnet: 1,
  rinkeby: 4,
  ropsten: 3,
};

const MNEMONIC = process.env.MNEMONIC || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
const INFURA_API_KEY = process.env.INFURA_API_KEY || "";
const ALCHEMY_KEY = process.env.ALCHEMY_KEY || "";
const PVT_KEY = process.env.PVT_KEY || "";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
});

function createTestnetConfig(network: keyof typeof chainIds): NetworkUserConfig {
  const url: string = "https://eth-" + network + ".alchemyapi.io/v2/" + ALCHEMY_KEY;
  return {
    accounts: [PVT_KEY],
    chainId: chainIds[network],
    url,
  };
}

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      accounts: {
        mnemonic: MNEMONIC,
      },
      chainId: chainIds.hardhat,
    },
    arbitrum: {
      url: "http://localhost:8547",
      accounts: {
        mnemonic: "jar deny prosper gasp flush glass core corn alarm treat leg smart",
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 10,
      },
      gasPrice: 0,
    },
    arbitrumLive: {
      url: "https://rinkeby.arbitrum.io/rpc",
      accounts: [PVT_KEY],
    },
    geth: {
      url: "http://localhost:7545",
      accounts: {
        mnemonic: "jar deny prosper gasp flush glass core corn alarm treat leg smart",
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 10,
      },
    },
    goerli: createTestnetConfig("goerli"),
    kovan: createTestnetConfig("kovan"),
    rinkeby: createTestnetConfig("rinkeby"),
    ropsten: createTestnetConfig("ropsten"),
  },
  solidity: {
    compilers: [
      {
        version: "0.8.2",
      },
      {
        version: "0.8.0",
      },
    ],
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter: {
    currency: "USD",
    gasPrice: 100,
    // enabled: process.env.REPORT_GAS ? true : false,
  },
};

export default config;

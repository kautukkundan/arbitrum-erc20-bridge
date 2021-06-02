# deploy arb bridge
npx hardhat run scripts/deployment/deployArbBridge.ts --network arbitrum

# deploy deployStandardERC20
npx hardhat run scripts/deployment/deployStandardERC20.ts --network arbitrum

# deploy eth bridge
npx hardhat run scripts/deployment/deployEthBridge.ts --network geth

# deploy erc20
npx hardhat run scripts/deployment/deployERC20.ts --network geth
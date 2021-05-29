// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

interface IEthERC20Bridge {
    event ActivateCustomToken(uint256 indexed seqNum, address indexed l1Address, address l2Address);

    event DeployToken(uint256 indexed seqNum, address indexed l1Address);

    event WithdrawRedirected(
        address indexed user,
        address indexed to,
        address erc20,
        uint256 amount,
        uint256 indexed exitNum,
        bool madeExternalCall
    );

    event WithdrawExecuted(
        address indexed initialDestination,
        address indexed destination,
        address erc20,
        uint256 amount,
        uint256 indexed exitNum
    );

    event DepositToken(
        address indexed destination,
        address sender,
        uint256 indexed seqNum,
        uint256 value,
        address indexed tokenAddress
    );

    function hasTriedDeploy(address erc20) external view returns (bool);

    function registerCustomL2Token(
        address l2CustomTokenAddress,
        uint256 maxSubmissionCost,
        uint256 maxGas,
        uint256 gasPriceBid,
        address refundAddress
    ) external payable returns (uint256);

    function withdrawFromL2(
        uint256 exitNum,
        address erc20,
        address initialDestination,
        uint256 amount
    ) external;

    function deposit(
        address erc20,
        address destination,
        uint256 amount,
        uint256 maxSubmissionCost,
        uint256 maxGas,
        uint256 gasPriceBid,
        bytes calldata callHookData
    ) external payable returns (uint256 seqNum, uint256 depositCalldataLength);

    function getDepositCalldata(
        address erc20,
        address destination,
        address sender,
        uint256 amount,
        bytes calldata callHookData
    ) external view returns (bool isDeployed, bytes memory depositCalldata);

    function transferExitAndCall(
        address initialDestination,
        address erc20,
        uint256 amount,
        uint256 exitNum,
        address to,
        bytes calldata data
    ) external;

    function calculateL2TokenAddress(address erc20) external view returns (address);
}

interface IExitTransferCallReceiver {
    // expects magic number to be returned if success ( IExitTransferCallReceiver.onExitTransfered.selector )
    function onExitTransfered(
        address sender,
        uint256 amount,
        address erc20,
        bytes calldata data
    ) external returns (bytes4);
}

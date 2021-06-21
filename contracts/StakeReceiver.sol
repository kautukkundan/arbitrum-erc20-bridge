// SPDX-License-Identifier: None
pragma solidity ^0.8.0;

import "./IERC677.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract StakeReceiver is IERC677Receiver {
    mapping(address => uint256) public stakes;
    mapping(address => uint256) public customMessage;
    address public prevSender;

    constructor() {
        prevSender = address(0);
    }

    function postDepositHook(address sender, uint256 num) public {
        customMessage[sender] = num;
    }

    function onTokenTransfer(
        address sender,
        uint256 amount,
        bytes calldata data
    ) external override {
        prevSender = sender;
        uint256 num = abi.decode(data, (uint256));
        postDepositHook(sender, num);
        stakes[sender] += amount;
    }

    function unstake(uint256 amount, address token) external {
        require(stakes[msg.sender] >= amount, "INSUFFICIENT_STAKE");
        stakes[msg.sender] -= amount;
        IERC20(token).transfer(msg.sender, amount);
    }
}

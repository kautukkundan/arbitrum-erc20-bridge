// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

// import "../libraries/aeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestERC20 is ERC20("Test Token", "TST") {
    constructor() {
        _mint(msg.sender, 50000000);
    }
}

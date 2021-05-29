// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/draft-ERC20PermitUpgradeable.sol";
import "./ERC677Token.sol";

/// @title Arbitrum extended ERC20
/// @notice The recommended ERC20 implementation for Layer 2 tokens
/// @dev This implements the ERC20 standard with extensions to improve UX (ERC677 & ERC2612)
contract aeERC20 is ERC20PermitUpgradeable, ERC677Token {
    function initialize(string memory name, string memory symbol) public initializer {
        __ERC20Permit_init(name);
        __ERC20_init(name, symbol);
    }
}

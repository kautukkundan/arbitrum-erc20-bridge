// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/utils/Create2Upgradeable.sol";

abstract contract TokenAddressHandler {
    mapping(address => address) public customL2Token;

    function isCustomToken(address l1Token) public view returns (bool) {
        return customL2Token[l1Token] != address(0);
    }

    function getCreate2Salt(address l1Token, address l2TemplateERC20) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked(l1Token, l2TemplateERC20));
    }

    function calculateL2ERC20TokenAddress(
        address l1Token,
        address l2TemplateERC20,
        address l2ArbTokenBridgeAddress,
        bytes32 cloneableProxyHash
    ) internal view returns (address) {
        bytes32 salt = getCreate2Salt(l1Token, l2TemplateERC20);
        return Create2Upgradeable.computeAddress(salt, cloneableProxyHash, l2ArbTokenBridgeAddress);
    }

    function calculateL2TokenAddress(
        address l1Token,
        address l2TemplateERC20,
        address l2ArbTokenBridgeAddress,
        bytes32 cloneableProxyHash
    ) internal view returns (address) {
        address customTokenAddress = customL2Token[l1Token];

        if (customTokenAddress != address(0)) {
            return customTokenAddress;
        } else {
            return calculateL2ERC20TokenAddress(l1Token, l2TemplateERC20, l2ArbTokenBridgeAddress, cloneableProxyHash);
        }
    }
}

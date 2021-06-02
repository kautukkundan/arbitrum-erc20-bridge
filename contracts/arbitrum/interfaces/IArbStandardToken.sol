// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "./IArbToken.sol";

interface IArbStandardToken is IArbToken {
    /**
     * @notice initialize the token
     * @dev the L2 bridge assumes this does not fail or revert
     * @param _l1Address L1 address of ERC20
     * @param _data encoded symbol/name/decimal data for initial deploy
     */
    function bridgeInit(address _l1Address, bytes memory _data) external;

    /**
     * @notice Migrate tokens from to a custom token contract; this should only happen/matter
     * if a standard ERC20 is deployed for an L1 custom contract before the L2 custom contract gets registered
     * @param destination destination address
     * @param amount amount of tokens withdrawn
     */
    function migrate(address destination, uint256 amount) external;
}

// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "./BytesLib.sol";
import "./DebugPrint.sol";

library BytesParserWithDefault {
    using BytesLib for bytes;

    function toUint8(bytes memory input, uint8 defaultValue) internal pure returns (uint8) {
        if (input.length == 0) {
            return defaultValue;
        } else {
            // TODO: try catch to handle error
            return abi.decode(input, (uint8));
        }
    }

    function toString(bytes memory input, string memory defaultValue) internal pure returns (string memory) {
        if (input.length == 0) {
            return defaultValue;
        } else if (input.length == 32) {
            return DebugPrint.bytes32string(input.toBytes32(0));
        } else {
            // TODO: try catch to handle error
            return abi.decode(input, (string));
        }
    }
}

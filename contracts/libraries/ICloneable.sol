// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

interface ICloneable {
    function isMaster() external view returns (bool);
}

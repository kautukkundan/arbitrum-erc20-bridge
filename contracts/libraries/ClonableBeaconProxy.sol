// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/proxy/beacon/BeaconProxy.sol";

interface ProxySetter {
    function getBeacon() external view returns (address);
}

contract ClonableBeaconProxy is BeaconProxy {
    constructor() BeaconProxy(ProxySetter(msg.sender).getBeacon(), "") {}
}

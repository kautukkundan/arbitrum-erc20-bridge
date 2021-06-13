/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface L1ERC20GatewayInterface extends ethers.utils.Interface {
  functions: {
    "calculateL2TokenAddress(address)": FunctionFragment;
    "cloneableProxyHash()": FunctionFragment;
    "counterpartGateway()": FunctionFragment;
    "encodeWithdrawal(uint256,address)": FunctionFragment;
    "finalizeInboundTransfer(address,address,address,uint256,bytes)": FunctionFragment;
    "gasReserveIfCallRevert()": FunctionFragment;
    "getCurrentDestination(uint256,address)": FunctionFragment;
    "getOutboundCalldata(address,address,address,uint256,bytes)": FunctionFragment;
    "inboundEscrowAndCall(address,uint256,address,address,bytes)": FunctionFragment;
    "inbox()": FunctionFragment;
    "initialize(address,address,address,bytes32,address)": FunctionFragment;
    "l2BeaconProxyFactory()": FunctionFragment;
    "outboundTransfer(address,address,uint256,uint256,uint256,bytes)": FunctionFragment;
    "parseInboundData(bytes)": FunctionFragment;
    "postUpgradeInit(bytes32,address)": FunctionFragment;
    "redirectedExits(bytes32)": FunctionFragment;
    "router()": FunctionFragment;
    "transferExitAndCall(uint256,address,address,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calculateL2TokenAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "cloneableProxyHash",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "counterpartGateway",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "encodeWithdrawal",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeInboundTransfer",
    values: [string, string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "gasReserveIfCallRevert",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentDestination",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getOutboundCalldata",
    values: [string, string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "inboundEscrowAndCall",
    values: [string, BigNumberish, string, string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "inbox", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "l2BeaconProxyFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "outboundTransfer",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "parseInboundData",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "postUpgradeInit",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "redirectedExits",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferExitAndCall",
    values: [BigNumberish, string, string, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateL2TokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cloneableProxyHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "counterpartGateway",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "encodeWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizeInboundTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gasReserveIfCallRevert",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentDestination",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOutboundCalldata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "inboundEscrowAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "inbox", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "l2BeaconProxyFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "outboundTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "parseInboundData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "postUpgradeInit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redirectedExits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferExitAndCall",
    data: BytesLike
  ): Result;

  events: {
    "InboundTransferFinalized(address,address,address,uint256,uint256,bytes)": EventFragment;
    "OutboundTransferInitiated(address,address,address,uint256,uint256,bytes)": EventFragment;
    "TransferAndCallTriggered(bool,address,address,uint256,bytes)": EventFragment;
    "TxToL2(address,address,uint256,bytes)": EventFragment;
    "WithdrawRedirected(address,address,uint256,bytes,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "InboundTransferFinalized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OutboundTransferInitiated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferAndCallTriggered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TxToL2"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawRedirected"): EventFragment;
}

export class L1ERC20Gateway extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: L1ERC20GatewayInterface;

  functions: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "calculateL2TokenAddress(address)"(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    cloneableProxyHash(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "cloneableProxyHash()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    counterpartGateway(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "counterpartGateway()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    encodeWithdrawal(
      _exitNum: BigNumberish,
      _initialDestination: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "encodeWithdrawal(uint256,address)"(
      _exitNum: BigNumberish,
      _initialDestination: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "finalizeInboundTransfer(address,address,address,uint256,bytes)"(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    gasReserveIfCallRevert(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    "gasReserveIfCallRevert()"(overrides?: CallOverrides): Promise<{
      0: BigNumber;
    }>;

    getCurrentDestination(
      _exitNum: BigNumberish,
      _initialDestination: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getCurrentDestination(uint256,address)"(
      _exitNum: BigNumberish,
      _initialDestination: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      outboundCalldata: string;
      0: string;
    }>;

    "getOutboundCalldata(address,address,address,uint256,bytes)"(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      outboundCalldata: string;
      0: string;
    }>;

    inboundEscrowAndCall(
      _l2Address: string,
      _amount: BigNumberish,
      _from: string,
      _to: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "inboundEscrowAndCall(address,uint256,address,address,bytes)"(
      _l2Address: string,
      _amount: BigNumberish,
      _from: string,
      _to: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    inbox(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "inbox()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    initialize(
      _l2Counterpart: string,
      _router: string,
      _inbox: string,
      _cloneableProxyHash: BytesLike,
      _l2BeaconProxyFactory: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "initialize(address,address,address,bytes32,address)"(
      _l2Counterpart: string,
      _router: string,
      _inbox: string,
      _cloneableProxyHash: BytesLike,
      _l2BeaconProxyFactory: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    l2BeaconProxyFactory(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "l2BeaconProxyFactory()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    outboundTransfer(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "outboundTransfer(address,address,uint256,uint256,uint256,bytes)"(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    parseInboundData(
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      _exitNum: BigNumber;
      _extraData: string;
      0: BigNumber;
      1: string;
    }>;

    "parseInboundData(bytes)"(
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      _exitNum: BigNumber;
      _extraData: string;
      0: BigNumber;
      1: string;
    }>;

    postUpgradeInit(
      _cloneableProxyHash: BytesLike,
      _l2BeaconProxyFactory: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "postUpgradeInit(bytes32,address)"(
      _cloneableProxyHash: BytesLike,
      _l2BeaconProxyFactory: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    redirectedExits(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "redirectedExits(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    router(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "router()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    transferExitAndCall(
      _exitNum: BigNumberish,
      _initialDestination: string,
      _newDestination: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferExitAndCall(uint256,address,address,bytes)"(
      _exitNum: BigNumberish,
      _initialDestination: string,
      _newDestination: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  calculateL2TokenAddress(
    l1ERC20: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "calculateL2TokenAddress(address)"(
    l1ERC20: string,
    overrides?: CallOverrides
  ): Promise<string>;

  cloneableProxyHash(overrides?: CallOverrides): Promise<string>;

  "cloneableProxyHash()"(overrides?: CallOverrides): Promise<string>;

  counterpartGateway(overrides?: CallOverrides): Promise<string>;

  "counterpartGateway()"(overrides?: CallOverrides): Promise<string>;

  encodeWithdrawal(
    _exitNum: BigNumberish,
    _initialDestination: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "encodeWithdrawal(uint256,address)"(
    _exitNum: BigNumberish,
    _initialDestination: string,
    overrides?: CallOverrides
  ): Promise<string>;

  finalizeInboundTransfer(
    _token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "finalizeInboundTransfer(address,address,address,uint256,bytes)"(
    _token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  gasReserveIfCallRevert(overrides?: CallOverrides): Promise<BigNumber>;

  "gasReserveIfCallRevert()"(overrides?: CallOverrides): Promise<BigNumber>;

  getCurrentDestination(
    _exitNum: BigNumberish,
    _initialDestination: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "getCurrentDestination(uint256,address)"(
    _exitNum: BigNumberish,
    _initialDestination: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getOutboundCalldata(
    _token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  "getOutboundCalldata(address,address,address,uint256,bytes)"(
    _token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  inboundEscrowAndCall(
    _l2Address: string,
    _amount: BigNumberish,
    _from: string,
    _to: string,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "inboundEscrowAndCall(address,uint256,address,address,bytes)"(
    _l2Address: string,
    _amount: BigNumberish,
    _from: string,
    _to: string,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  inbox(overrides?: CallOverrides): Promise<string>;

  "inbox()"(overrides?: CallOverrides): Promise<string>;

  initialize(
    _l2Counterpart: string,
    _router: string,
    _inbox: string,
    _cloneableProxyHash: BytesLike,
    _l2BeaconProxyFactory: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "initialize(address,address,address,bytes32,address)"(
    _l2Counterpart: string,
    _router: string,
    _inbox: string,
    _cloneableProxyHash: BytesLike,
    _l2BeaconProxyFactory: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  l2BeaconProxyFactory(overrides?: CallOverrides): Promise<string>;

  "l2BeaconProxyFactory()"(overrides?: CallOverrides): Promise<string>;

  outboundTransfer(
    _l1Token: string,
    _to: string,
    _amount: BigNumberish,
    _maxGas: BigNumberish,
    _gasPriceBid: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "outboundTransfer(address,address,uint256,uint256,uint256,bytes)"(
    _l1Token: string,
    _to: string,
    _amount: BigNumberish,
    _maxGas: BigNumberish,
    _gasPriceBid: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  parseInboundData(
    _data: BytesLike,
    overrides?: CallOverrides
  ): Promise<{
    _exitNum: BigNumber;
    _extraData: string;
    0: BigNumber;
    1: string;
  }>;

  "parseInboundData(bytes)"(
    _data: BytesLike,
    overrides?: CallOverrides
  ): Promise<{
    _exitNum: BigNumber;
    _extraData: string;
    0: BigNumber;
    1: string;
  }>;

  postUpgradeInit(
    _cloneableProxyHash: BytesLike,
    _l2BeaconProxyFactory: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "postUpgradeInit(bytes32,address)"(
    _cloneableProxyHash: BytesLike,
    _l2BeaconProxyFactory: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  redirectedExits(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  "redirectedExits(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  router(overrides?: CallOverrides): Promise<string>;

  "router()"(overrides?: CallOverrides): Promise<string>;

  transferExitAndCall(
    _exitNum: BigNumberish,
    _initialDestination: string,
    _newDestination: string,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferExitAndCall(uint256,address,address,bytes)"(
    _exitNum: BigNumberish,
    _initialDestination: string,
    _newDestination: string,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "calculateL2TokenAddress(address)"(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<string>;

    cloneableProxyHash(overrides?: CallOverrides): Promise<string>;

    "cloneableProxyHash()"(overrides?: CallOverrides): Promise<string>;

    counterpartGateway(overrides?: CallOverrides): Promise<string>;

    "counterpartGateway()"(overrides?: CallOverrides): Promise<string>;

    encodeWithdrawal(
      _exitNum: BigNumberish,
      _initialDestination: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "encodeWithdrawal(uint256,address)"(
      _exitNum: BigNumberish,
      _initialDestination: string,
      overrides?: CallOverrides
    ): Promise<string>;

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "finalizeInboundTransfer(address,address,address,uint256,bytes)"(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    gasReserveIfCallRevert(overrides?: CallOverrides): Promise<BigNumber>;

    "gasReserveIfCallRevert()"(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentDestination(
      _exitNum: BigNumberish,
      _initialDestination: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "getCurrentDestination(uint256,address)"(
      _exitNum: BigNumberish,
      _initialDestination: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "getOutboundCalldata(address,address,address,uint256,bytes)"(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    inboundEscrowAndCall(
      _l2Address: string,
      _amount: BigNumberish,
      _from: string,
      _to: string,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "inboundEscrowAndCall(address,uint256,address,address,bytes)"(
      _l2Address: string,
      _amount: BigNumberish,
      _from: string,
      _to: string,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    inbox(overrides?: CallOverrides): Promise<string>;

    "inbox()"(overrides?: CallOverrides): Promise<string>;

    initialize(
      _l2Counterpart: string,
      _router: string,
      _inbox: string,
      _cloneableProxyHash: BytesLike,
      _l2BeaconProxyFactory: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initialize(address,address,address,bytes32,address)"(
      _l2Counterpart: string,
      _router: string,
      _inbox: string,
      _cloneableProxyHash: BytesLike,
      _l2BeaconProxyFactory: string,
      overrides?: CallOverrides
    ): Promise<void>;

    l2BeaconProxyFactory(overrides?: CallOverrides): Promise<string>;

    "l2BeaconProxyFactory()"(overrides?: CallOverrides): Promise<string>;

    outboundTransfer(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "outboundTransfer(address,address,uint256,uint256,uint256,bytes)"(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    parseInboundData(
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      _exitNum: BigNumber;
      _extraData: string;
      0: BigNumber;
      1: string;
    }>;

    "parseInboundData(bytes)"(
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      _exitNum: BigNumber;
      _extraData: string;
      0: BigNumber;
      1: string;
    }>;

    postUpgradeInit(
      _cloneableProxyHash: BytesLike,
      _l2BeaconProxyFactory: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "postUpgradeInit(bytes32,address)"(
      _cloneableProxyHash: BytesLike,
      _l2BeaconProxyFactory: string,
      overrides?: CallOverrides
    ): Promise<void>;

    redirectedExits(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "redirectedExits(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    router(overrides?: CallOverrides): Promise<string>;

    "router()"(overrides?: CallOverrides): Promise<string>;

    transferExitAndCall(
      _exitNum: BigNumberish,
      _initialDestination: string,
      _newDestination: string,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferExitAndCall(uint256,address,address,bytes)"(
      _exitNum: BigNumberish,
      _initialDestination: string,
      _newDestination: string,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    InboundTransferFinalized(
      token: null,
      _from: string | null,
      _to: string | null,
      _transferId: BigNumberish | null,
      _amount: null,
      _data: null
    ): EventFilter;

    OutboundTransferInitiated(
      token: null,
      _from: string | null,
      _to: string | null,
      _transferId: BigNumberish | null,
      _amount: null,
      _data: null
    ): EventFilter;

    TransferAndCallTriggered(
      success: null,
      _from: string | null,
      _to: string | null,
      _amount: null,
      callHookData: null
    ): EventFilter;

    TxToL2(
      _from: string | null,
      _to: string | null,
      _seqNum: BigNumberish | null,
      _data: null
    ): EventFilter;

    WithdrawRedirected(
      from: string | null,
      to: string | null,
      exitNum: BigNumberish | null,
      data: null,
      madeExternalCall: null
    ): EventFilter;
  };

  estimateGas: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateL2TokenAddress(address)"(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cloneableProxyHash(overrides?: CallOverrides): Promise<BigNumber>;

    "cloneableProxyHash()"(overrides?: CallOverrides): Promise<BigNumber>;

    counterpartGateway(overrides?: CallOverrides): Promise<BigNumber>;

    "counterpartGateway()"(overrides?: CallOverrides): Promise<BigNumber>;

    encodeWithdrawal(
      _exitNum: BigNumberish,
      _initialDestination: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "encodeWithdrawal(uint256,address)"(
      _exitNum: BigNumberish,
      _initialDestination: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "finalizeInboundTransfer(address,address,address,uint256,bytes)"(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    gasReserveIfCallRevert(overrides?: CallOverrides): Promise<BigNumber>;

    "gasReserveIfCallRevert()"(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentDestination(
      _exitNum: BigNumberish,
      _initialDestination: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getCurrentDestination(uint256,address)"(
      _exitNum: BigNumberish,
      _initialDestination: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getOutboundCalldata(address,address,address,uint256,bytes)"(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    inboundEscrowAndCall(
      _l2Address: string,
      _amount: BigNumberish,
      _from: string,
      _to: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "inboundEscrowAndCall(address,uint256,address,address,bytes)"(
      _l2Address: string,
      _amount: BigNumberish,
      _from: string,
      _to: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    inbox(overrides?: CallOverrides): Promise<BigNumber>;

    "inbox()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _l2Counterpart: string,
      _router: string,
      _inbox: string,
      _cloneableProxyHash: BytesLike,
      _l2BeaconProxyFactory: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "initialize(address,address,address,bytes32,address)"(
      _l2Counterpart: string,
      _router: string,
      _inbox: string,
      _cloneableProxyHash: BytesLike,
      _l2BeaconProxyFactory: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    l2BeaconProxyFactory(overrides?: CallOverrides): Promise<BigNumber>;

    "l2BeaconProxyFactory()"(overrides?: CallOverrides): Promise<BigNumber>;

    outboundTransfer(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "outboundTransfer(address,address,uint256,uint256,uint256,bytes)"(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    parseInboundData(
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "parseInboundData(bytes)"(
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    postUpgradeInit(
      _cloneableProxyHash: BytesLike,
      _l2BeaconProxyFactory: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "postUpgradeInit(bytes32,address)"(
      _cloneableProxyHash: BytesLike,
      _l2BeaconProxyFactory: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    redirectedExits(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "redirectedExits(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    router(overrides?: CallOverrides): Promise<BigNumber>;

    "router()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferExitAndCall(
      _exitNum: BigNumberish,
      _initialDestination: string,
      _newDestination: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferExitAndCall(uint256,address,address,bytes)"(
      _exitNum: BigNumberish,
      _initialDestination: string,
      _newDestination: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calculateL2TokenAddress(address)"(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cloneableProxyHash(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "cloneableProxyHash()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    counterpartGateway(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "counterpartGateway()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    encodeWithdrawal(
      _exitNum: BigNumberish,
      _initialDestination: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "encodeWithdrawal(uint256,address)"(
      _exitNum: BigNumberish,
      _initialDestination: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "finalizeInboundTransfer(address,address,address,uint256,bytes)"(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    gasReserveIfCallRevert(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "gasReserveIfCallRevert()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCurrentDestination(
      _exitNum: BigNumberish,
      _initialDestination: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCurrentDestination(uint256,address)"(
      _exitNum: BigNumberish,
      _initialDestination: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getOutboundCalldata(address,address,address,uint256,bytes)"(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    inboundEscrowAndCall(
      _l2Address: string,
      _amount: BigNumberish,
      _from: string,
      _to: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "inboundEscrowAndCall(address,uint256,address,address,bytes)"(
      _l2Address: string,
      _amount: BigNumberish,
      _from: string,
      _to: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    inbox(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "inbox()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _l2Counterpart: string,
      _router: string,
      _inbox: string,
      _cloneableProxyHash: BytesLike,
      _l2BeaconProxyFactory: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "initialize(address,address,address,bytes32,address)"(
      _l2Counterpart: string,
      _router: string,
      _inbox: string,
      _cloneableProxyHash: BytesLike,
      _l2BeaconProxyFactory: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    l2BeaconProxyFactory(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "l2BeaconProxyFactory()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    outboundTransfer(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "outboundTransfer(address,address,uint256,uint256,uint256,bytes)"(
      _l1Token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    parseInboundData(
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "parseInboundData(bytes)"(
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    postUpgradeInit(
      _cloneableProxyHash: BytesLike,
      _l2BeaconProxyFactory: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "postUpgradeInit(bytes32,address)"(
      _cloneableProxyHash: BytesLike,
      _l2BeaconProxyFactory: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    redirectedExits(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "redirectedExits(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "router()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferExitAndCall(
      _exitNum: BigNumberish,
      _initialDestination: string,
      _newDestination: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferExitAndCall(uint256,address,address,bytes)"(
      _exitNum: BigNumberish,
      _initialDestination: string,
      _newDestination: string,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}

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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface WhitelistInterface extends ethers.utils.Interface {
  functions: {
    "isAllowed(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "setWhitelist(address[],bool[])": FunctionFragment;
    "triggerConsumers(address,address[])": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "isAllowed", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setWhitelist",
    values: [string[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "triggerConsumers",
    values: [string, string[]]
  ): string;

  decodeFunctionResult(functionFragment: "isAllowed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "triggerConsumers",
    data: BytesLike
  ): Result;

  events: {
    "OwnerUpdated(address)": EventFragment;
    "WhitelistUpgraded(address,address[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WhitelistUpgraded"): EventFragment;
}

export class Whitelist extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: WhitelistInterface;

  functions: {
    isAllowed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isAllowed(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    owner(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "owner()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    setOwner(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setOwner(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setWhitelist(
      user: string[],
      val: boolean[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setWhitelist(address[],bool[])"(
      user: string[],
      val: boolean[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    triggerConsumers(
      newWhitelist: string,
      targets: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "triggerConsumers(address,address[])"(
      newWhitelist: string,
      targets: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  isAllowed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "isAllowed(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  setOwner(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setOwner(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setWhitelist(
    user: string[],
    val: boolean[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setWhitelist(address[],bool[])"(
    user: string[],
    val: boolean[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  triggerConsumers(
    newWhitelist: string,
    targets: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "triggerConsumers(address,address[])"(
    newWhitelist: string,
    targets: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    isAllowed(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "isAllowed(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;

    "setOwner(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setWhitelist(
      user: string[],
      val: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    "setWhitelist(address[],bool[])"(
      user: string[],
      val: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    triggerConsumers(
      newWhitelist: string,
      targets: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    "triggerConsumers(address,address[])"(
      newWhitelist: string,
      targets: string[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnerUpdated(newOwner: null): EventFilter;

    WhitelistUpgraded(newWhitelist: null, targets: null): EventFilter;
  };

  estimateGas: {
    isAllowed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isAllowed(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    setOwner(newOwner: string, overrides?: Overrides): Promise<BigNumber>;

    "setOwner(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setWhitelist(
      user: string[],
      val: boolean[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setWhitelist(address[],bool[])"(
      user: string[],
      val: boolean[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    triggerConsumers(
      newWhitelist: string,
      targets: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "triggerConsumers(address,address[])"(
      newWhitelist: string,
      targets: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    isAllowed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isAllowed(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setOwner(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setOwner(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setWhitelist(
      user: string[],
      val: boolean[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setWhitelist(address[],bool[])"(
      user: string[],
      val: boolean[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    triggerConsumers(
      newWhitelist: string,
      targets: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "triggerConsumers(address,address[])"(
      newWhitelist: string,
      targets: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}

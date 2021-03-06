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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ProxySetterInterface extends ethers.utils.Interface {
  functions: {
    "beacon()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "beacon", values?: undefined): string;

  decodeFunctionResult(functionFragment: "beacon", data: BytesLike): Result;

  events: {};
}

export class ProxySetter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ProxySetterInterface;

  functions: {
    beacon(overrides?: CallOverrides): Promise<{
      0: string;
    }>;

    "beacon()"(overrides?: CallOverrides): Promise<{
      0: string;
    }>;
  };

  beacon(overrides?: CallOverrides): Promise<string>;

  "beacon()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    beacon(overrides?: CallOverrides): Promise<string>;

    "beacon()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    beacon(overrides?: CallOverrides): Promise<BigNumber>;

    "beacon()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    beacon(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "beacon()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es,rewrite_imports=./cosmos/vesting/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/msg/v1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/base/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/base/query/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/bank/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/auth/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./amino/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es"
// @generated from file evmos/erc20/v1/genesis.proto (package evmos.erc20.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { TokenPair } from "./erc20_pb.js";

/**
 * GenesisState defines the module's genesis state.
 *
 * @generated from message evmos.erc20.v1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
  /**
   * params are the erc20 module parameters at genesis
   *
   * @generated from field: evmos.erc20.v1.Params params = 1;
   */
  params?: Params;

  /**
   * token_pairs is a slice of the registered token pairs at genesis
   *
   * @generated from field: repeated evmos.erc20.v1.TokenPair token_pairs = 2;
   */
  tokenPairs: TokenPair[];

  constructor(data?: PartialMessage<GenesisState>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "evmos.erc20.v1.GenesisState";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;

  static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}

/**
 * Params defines the erc20 module params
 *
 * @generated from message evmos.erc20.v1.Params
 */
export declare class Params extends Message<Params> {
  /**
   * enable_erc20 is the parameter to enable the conversion of Cosmos coins <--> ERC20 tokens.
   *
   * @generated from field: bool enable_erc20 = 1;
   */
  enableErc20: boolean;

  /**
   * enable_evm_hook is the parameter to enable the EVM hook that converts an ERC20 token to a Cosmos
   * Coin by transferring the Tokens through a MsgEthereumTx to the ModuleAddress Ethereum address.
   *
   * @generated from field: bool enable_evm_hook = 2;
   */
  enableEvmHook: boolean;

  constructor(data?: PartialMessage<Params>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "evmos.erc20.v1.Params";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;

  static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}

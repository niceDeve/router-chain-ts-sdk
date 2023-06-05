// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es,rewrite_imports=./cosmos/vesting/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/msg/v1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/base/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/base/query/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/bank/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/auth/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./amino/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es"
// @generated from file evmos/revenue/v1/tx.proto (package evmos.revenue.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { Params } from "./genesis_pb.js";

/**
 * MsgRegisterRevenue defines a message that registers a Revenue
 *
 * @generated from message evmos.revenue.v1.MsgRegisterRevenue
 */
export declare class MsgRegisterRevenue extends Message<MsgRegisterRevenue> {
  /**
   * contract_address in hex format
   *
   * @generated from field: string contract_address = 1;
   */
  contractAddress: string;

  /**
   * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
   * sending the transaction which deploys the contract
   *
   * @generated from field: string deployer_address = 2;
   */
  deployerAddress: string;

  /**
   * withdrawer_address is the bech32 address of account receiving the transaction fees
   *
   * @generated from field: string withdrawer_address = 3;
   */
  withdrawerAddress: string;

  /**
   * nonces is an array of nonces from the address path, where the last nonce is the nonce
   * that determines the contract's address - it can be an EOA nonce or a
   * factory contract nonce
   *
   * @generated from field: repeated uint64 nonces = 4;
   */
  nonces: bigint[];

  constructor(data?: PartialMessage<MsgRegisterRevenue>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "evmos.revenue.v1.MsgRegisterRevenue";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRegisterRevenue;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRegisterRevenue;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRegisterRevenue;

  static equals(a: MsgRegisterRevenue | PlainMessage<MsgRegisterRevenue> | undefined, b: MsgRegisterRevenue | PlainMessage<MsgRegisterRevenue> | undefined): boolean;
}

/**
 * MsgRegisterRevenueResponse defines the MsgRegisterRevenue response type
 *
 * @generated from message evmos.revenue.v1.MsgRegisterRevenueResponse
 */
export declare class MsgRegisterRevenueResponse extends Message<MsgRegisterRevenueResponse> {
  constructor(data?: PartialMessage<MsgRegisterRevenueResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "evmos.revenue.v1.MsgRegisterRevenueResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRegisterRevenueResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRegisterRevenueResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRegisterRevenueResponse;

  static equals(a: MsgRegisterRevenueResponse | PlainMessage<MsgRegisterRevenueResponse> | undefined, b: MsgRegisterRevenueResponse | PlainMessage<MsgRegisterRevenueResponse> | undefined): boolean;
}

/**
 * MsgUpdateRevenue defines a message that updates the withdrawer address for a
 * registered Revenue
 *
 * @generated from message evmos.revenue.v1.MsgUpdateRevenue
 */
export declare class MsgUpdateRevenue extends Message<MsgUpdateRevenue> {
  /**
   * contract_address in hex format
   *
   * @generated from field: string contract_address = 1;
   */
  contractAddress: string;

  /**
   * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
   * sending the transaction which deploys the contract
   *
   * @generated from field: string deployer_address = 2;
   */
  deployerAddress: string;

  /**
   * withdrawer_address is the bech32 address of account receiving the transaction fees
   *
   * @generated from field: string withdrawer_address = 3;
   */
  withdrawerAddress: string;

  constructor(data?: PartialMessage<MsgUpdateRevenue>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "evmos.revenue.v1.MsgUpdateRevenue";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateRevenue;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateRevenue;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateRevenue;

  static equals(a: MsgUpdateRevenue | PlainMessage<MsgUpdateRevenue> | undefined, b: MsgUpdateRevenue | PlainMessage<MsgUpdateRevenue> | undefined): boolean;
}

/**
 * MsgUpdateRevenueResponse defines the MsgUpdateRevenue response type
 *
 * @generated from message evmos.revenue.v1.MsgUpdateRevenueResponse
 */
export declare class MsgUpdateRevenueResponse extends Message<MsgUpdateRevenueResponse> {
  constructor(data?: PartialMessage<MsgUpdateRevenueResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "evmos.revenue.v1.MsgUpdateRevenueResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateRevenueResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateRevenueResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateRevenueResponse;

  static equals(a: MsgUpdateRevenueResponse | PlainMessage<MsgUpdateRevenueResponse> | undefined, b: MsgUpdateRevenueResponse | PlainMessage<MsgUpdateRevenueResponse> | undefined): boolean;
}

/**
 * MsgCancelRevenue defines a message that cancels a registered Revenue
 *
 * @generated from message evmos.revenue.v1.MsgCancelRevenue
 */
export declare class MsgCancelRevenue extends Message<MsgCancelRevenue> {
  /**
   * contract_address in hex format
   *
   * @generated from field: string contract_address = 1;
   */
  contractAddress: string;

  /**
   * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
   * sending the transaction which deploys the contract
   *
   * @generated from field: string deployer_address = 2;
   */
  deployerAddress: string;

  constructor(data?: PartialMessage<MsgCancelRevenue>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "evmos.revenue.v1.MsgCancelRevenue";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelRevenue;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelRevenue;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelRevenue;

  static equals(a: MsgCancelRevenue | PlainMessage<MsgCancelRevenue> | undefined, b: MsgCancelRevenue | PlainMessage<MsgCancelRevenue> | undefined): boolean;
}

/**
 * MsgCancelRevenueResponse defines the MsgCancelRevenue response type
 *
 * @generated from message evmos.revenue.v1.MsgCancelRevenueResponse
 */
export declare class MsgCancelRevenueResponse extends Message<MsgCancelRevenueResponse> {
  constructor(data?: PartialMessage<MsgCancelRevenueResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "evmos.revenue.v1.MsgCancelRevenueResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCancelRevenueResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCancelRevenueResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCancelRevenueResponse;

  static equals(a: MsgCancelRevenueResponse | PlainMessage<MsgCancelRevenueResponse> | undefined, b: MsgCancelRevenueResponse | PlainMessage<MsgCancelRevenueResponse> | undefined): boolean;
}

/**
 * MsgUpdateParams defines a Msg for updating the x/revenue module parameters.
 *
 * @generated from message evmos.revenue.v1.MsgUpdateParams
 */
export declare class MsgUpdateParams extends Message<MsgUpdateParams> {
  /**
   * authority is the address of the governance account.
   *
   * @generated from field: string authority = 1;
   */
  authority: string;

  /**
   * params defines the x/revenue parameters to update.
   * NOTE: All parameters must be supplied.
   *
   * @generated from field: evmos.revenue.v1.Params params = 2;
   */
  params?: Params;

  constructor(data?: PartialMessage<MsgUpdateParams>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "evmos.revenue.v1.MsgUpdateParams";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParams;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParams;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParams;

  static equals(a: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined, b: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined): boolean;
}

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * @generated from message evmos.revenue.v1.MsgUpdateParamsResponse
 */
export declare class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
  constructor(data?: PartialMessage<MsgUpdateParamsResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "evmos.revenue.v1.MsgUpdateParamsResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;

  static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean;
}


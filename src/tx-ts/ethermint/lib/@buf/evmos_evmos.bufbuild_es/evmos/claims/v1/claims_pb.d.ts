// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es,rewrite_imports=./cosmos/vesting/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/msg/v1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/base/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/base/query/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/bank/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/auth/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./amino/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es"
// @generated from file evmos/claims/v1/claims.proto (package evmos.claims.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Action defines the list of available actions to claim the airdrop tokens.
 *
 * @generated from enum evmos.claims.v1.Action
 */
export declare enum Action {
  /**
   * ACTION_UNSPECIFIED defines an invalid action.
   *
   * @generated from enum value: ACTION_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * ACTION_VOTE defines a proposal vote.
   *
   * @generated from enum value: ACTION_VOTE = 1;
   */
  VOTE = 1,

  /**
   * ACTION_DELEGATE defines an staking delegation.
   *
   * @generated from enum value: ACTION_DELEGATE = 2;
   */
  DELEGATE = 2,

  /**
   * ACTION_EVM defines an EVM transaction.
   *
   * @generated from enum value: ACTION_EVM = 3;
   */
  EVM = 3,

  /**
   * ACTION_IBC_TRANSFER defines a fungible token transfer transaction via IBC.
   *
   * @generated from enum value: ACTION_IBC_TRANSFER = 4;
   */
  IBC_TRANSFER = 4,
}

/**
 * Claim defines the action, completed flag and the remaining claimable amount
 * for a given user. This is only used during client queries.
 *
 * @generated from message evmos.claims.v1.Claim
 */
export declare class Claim extends Message<Claim> {
  /**
   * action enum
   *
   * @generated from field: evmos.claims.v1.Action action = 1;
   */
  action: Action;

  /**
   * completed is true if the action has been completed
   *
   * @generated from field: bool completed = 2;
   */
  completed: boolean;

  /**
   * claimable_amount of tokens for the action. Zero if completed
   *
   * @generated from field: string claimable_amount = 3;
   */
  claimableAmount: string;

  constructor(data?: PartialMessage<Claim>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "evmos.claims.v1.Claim";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Claim;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Claim;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Claim;

  static equals(a: Claim | PlainMessage<Claim> | undefined, b: Claim | PlainMessage<Claim> | undefined): boolean;
}

/**
 * ClaimsRecordAddress is the claims metadata per address that is used at
 * Genesis.
 *
 * @generated from message evmos.claims.v1.ClaimsRecordAddress
 */
export declare class ClaimsRecordAddress extends Message<ClaimsRecordAddress> {
  /**
   * address of claiming user in either bech32 or hex format
   *
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * initial_claimable_amount for the user
   *
   * @generated from field: string initial_claimable_amount = 2;
   */
  initialClaimableAmount: string;

  /**
   * actions_completed is a slice that describes which actions were completed
   *
   * @generated from field: repeated bool actions_completed = 3;
   */
  actionsCompleted: boolean[];

  constructor(data?: PartialMessage<ClaimsRecordAddress>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "evmos.claims.v1.ClaimsRecordAddress";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClaimsRecordAddress;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClaimsRecordAddress;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClaimsRecordAddress;

  static equals(a: ClaimsRecordAddress | PlainMessage<ClaimsRecordAddress> | undefined, b: ClaimsRecordAddress | PlainMessage<ClaimsRecordAddress> | undefined): boolean;
}

/**
 * ClaimsRecord defines the initial claimable airdrop amount and the list of
 * completed actions to claim the tokens.
 *
 * @generated from message evmos.claims.v1.ClaimsRecord
 */
export declare class ClaimsRecord extends Message<ClaimsRecord> {
  /**
   * initial_claimable_amount for the user
   *
   * @generated from field: string initial_claimable_amount = 1;
   */
  initialClaimableAmount: string;

  /**
   * actions_completed is a slice that describes which actions were completed
   *
   * @generated from field: repeated bool actions_completed = 2;
   */
  actionsCompleted: boolean[];

  constructor(data?: PartialMessage<ClaimsRecord>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "evmos.claims.v1.ClaimsRecord";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClaimsRecord;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClaimsRecord;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClaimsRecord;

  static equals(a: ClaimsRecord | PlainMessage<ClaimsRecord> | undefined, b: ClaimsRecord | PlainMessage<ClaimsRecord> | undefined): boolean;
}


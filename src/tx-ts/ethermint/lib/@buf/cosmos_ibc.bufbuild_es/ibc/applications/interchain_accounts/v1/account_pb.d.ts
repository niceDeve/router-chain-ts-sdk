// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./tendermint/version/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./tendermint/types/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./tendermint/crypto/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es,rewrite_imports=./cosmos/upgrade/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/ics23/v1/**/*_pb.js:@buf/cosmos_ics23.bufbuild_es,rewrite_imports=./cosmos/base/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/base/query/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/auth/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./amino/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es"
// @generated from file ibc/applications/interchain_accounts/v1/account.proto (package ibc.applications.interchain_accounts.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import type { BaseAccount } from "@buf/cosmos_cosmos-sdk.bufbuild_es/cosmos/auth/v1beta1/auth_pb";

/**
 * An InterchainAccount is defined as a BaseAccount & the address of the account owner on the controller chain
 *
 * @generated from message ibc.applications.interchain_accounts.v1.InterchainAccount
 */
export declare class InterchainAccount extends Message<InterchainAccount> {
  /**
   * @generated from field: cosmos.auth.v1beta1.BaseAccount base_account = 1;
   */
  baseAccount?: BaseAccount;

  /**
   * @generated from field: string account_owner = 2;
   */
  accountOwner: string;

  constructor(data?: PartialMessage<InterchainAccount>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "ibc.applications.interchain_accounts.v1.InterchainAccount";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InterchainAccount;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InterchainAccount;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InterchainAccount;

  static equals(a: InterchainAccount | PlainMessage<InterchainAccount> | undefined, b: InterchainAccount | PlainMessage<InterchainAccount> | undefined): boolean;
}


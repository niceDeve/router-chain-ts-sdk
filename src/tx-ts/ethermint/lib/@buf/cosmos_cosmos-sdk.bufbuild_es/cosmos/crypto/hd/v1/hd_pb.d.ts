// Since: cosmos-sdk 0.46

// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es"
// @generated from file cosmos/crypto/hd/v1/hd.proto (package cosmos.crypto.hd.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * BIP44Params is used as path field in ledger item in Record.
 *
 * @generated from message cosmos.crypto.hd.v1.BIP44Params
 */
export declare class BIP44Params extends Message<BIP44Params> {
  /**
   * purpose is a constant set to 44' (or 0x8000002C) following the BIP43 recommendation
   *
   * @generated from field: uint32 purpose = 1;
   */
  purpose: number;

  /**
   * coin_type is a constant that improves privacy
   *
   * @generated from field: uint32 coin_type = 2;
   */
  coinType: number;

  /**
   * account splits the key space into independent user identities
   *
   * @generated from field: uint32 account = 3;
   */
  account: number;

  /**
   * change is a constant used for public derivation. Constant 0 is used for external chain and constant 1 for internal
   * chain.
   *
   * @generated from field: bool change = 4;
   */
  change: boolean;

  /**
   * address_index is used as child index in BIP32 derivation
   *
   * @generated from field: uint32 address_index = 5;
   */
  addressIndex: number;

  constructor(data?: PartialMessage<BIP44Params>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cosmos.crypto.hd.v1.BIP44Params";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BIP44Params;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BIP44Params;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BIP44Params;

  static equals(a: BIP44Params | PlainMessage<BIP44Params> | undefined, b: BIP44Params | PlainMessage<BIP44Params> | undefined): boolean;
}


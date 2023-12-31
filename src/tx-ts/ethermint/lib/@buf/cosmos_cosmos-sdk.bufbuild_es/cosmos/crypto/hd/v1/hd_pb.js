// Since: cosmos-sdk 0.46

// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es"
// @generated from file cosmos/crypto/hd/v1/hd.proto (package cosmos.crypto.hd.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * BIP44Params is used as path field in ledger item in Record.
 *
 * @generated from message cosmos.crypto.hd.v1.BIP44Params
 */
export const BIP44Params = proto3.makeMessageType(
  "cosmos.crypto.hd.v1.BIP44Params",
  () => [
    { no: 1, name: "purpose", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "coin_type", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "account", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "change", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "address_index", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);


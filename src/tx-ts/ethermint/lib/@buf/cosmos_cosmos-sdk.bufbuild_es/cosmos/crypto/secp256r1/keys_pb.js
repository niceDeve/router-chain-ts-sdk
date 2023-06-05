// Since: cosmos-sdk 0.43

// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es"
// @generated from file cosmos/crypto/secp256r1/keys.proto (package cosmos.crypto.secp256r1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * PubKey defines a secp256r1 ECDSA public key.
 *
 * @generated from message cosmos.crypto.secp256r1.PubKey
 */
export const PubKey = proto3.makeMessageType(
  "cosmos.crypto.secp256r1.PubKey",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * PrivKey defines a secp256r1 ECDSA private key.
 *
 * @generated from message cosmos.crypto.secp256r1.PrivKey
 */
export const PrivKey = proto3.makeMessageType(
  "cosmos.crypto.secp256r1.PrivKey",
  () => [
    { no: 1, name: "secret", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);


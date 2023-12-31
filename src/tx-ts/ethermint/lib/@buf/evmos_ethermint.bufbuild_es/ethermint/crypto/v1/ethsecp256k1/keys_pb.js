// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es,rewrite_imports=./cosmos/msg/v1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/base/query/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/auth/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./amino/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es"
// @generated from file ethermint/crypto/v1/ethsecp256k1/keys.proto (package ethermint.crypto.v1.ethsecp256k1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * PubKey defines a type alias for an ecdsa.PublicKey that implements
 * Tendermint's PubKey interface. It represents the 33-byte compressed public
 * key format.
 *
 * @generated from message ethermint.crypto.v1.ethsecp256k1.PubKey
 */
export const PubKey = proto3.makeMessageType(
  "ethermint.crypto.v1.ethsecp256k1.PubKey",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * PrivKey defines a type alias for an ecdsa.PrivateKey that implements
 * Tendermint's PrivateKey interface.
 *
 * @generated from message ethermint.crypto.v1.ethsecp256k1.PrivKey
 */
export const PrivKey = proto3.makeMessageType(
  "ethermint.crypto.v1.ethsecp256k1.PrivKey",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);


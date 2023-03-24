// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./tendermint/version/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./tendermint/types/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./tendermint/crypto/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es,rewrite_imports=./cosmos/upgrade/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/ics23/v1/**/*_pb.js:@buf/cosmos_ics23.bufbuild_es,rewrite_imports=./cosmos/base/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/base/query/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/auth/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./amino/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es"
// @generated from file ibc/core/commitment/v1/commitment.proto (package ibc.core.commitment.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { CommitmentProof } from "@buf/cosmos_ics23.bufbuild_es/cosmos/ics23/v1/proofs_pb.js";

/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 *
 * @generated from message ibc.core.commitment.v1.MerkleRoot
 */
export const MerkleRoot = proto3.makeMessageType(
  "ibc.core.commitment.v1.MerkleRoot",
  () => [
    { no: 1, name: "hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 *
 * @generated from message ibc.core.commitment.v1.MerklePrefix
 */
export const MerklePrefix = proto3.makeMessageType(
  "ibc.core.commitment.v1.MerklePrefix",
  () => [
    { no: 1, name: "key_prefix", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * MerklePath is represented from root-to-leaf
 *
 * @generated from message ibc.core.commitment.v1.MerklePath
 */
export const MerklePath = proto3.makeMessageType(
  "ibc.core.commitment.v1.MerklePath",
  () => [
    { no: 1, name: "key_path", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * MerkleProof is a wrapper type over a chain of CommitmentProofs.
 * It demonstrates membership or non-membership for an element or set of
 * elements, verifiable in conjunction with a known commitment root. Proofs
 * should be succinct.
 * MerkleProofs are ordered from leaf-to-root
 *
 * @generated from message ibc.core.commitment.v1.MerkleProof
 */
export const MerkleProof = proto3.makeMessageType(
  "ibc.core.commitment.v1.MerkleProof",
  () => [
    { no: 1, name: "proofs", kind: "message", T: CommitmentProof, repeated: true },
  ],
);


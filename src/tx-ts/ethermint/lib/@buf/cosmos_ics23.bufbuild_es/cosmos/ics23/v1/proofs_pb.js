// @generated by protoc-gen-es v1.0.0
// @generated from file cosmos/ics23/v1/proofs.proto (package cosmos.ics23.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum cosmos.ics23.v1.HashOp
 */
export const HashOp = proto3.makeEnum(
  "cosmos.ics23.v1.HashOp",
  [
    {no: 0, name: "NO_HASH"},
    {no: 1, name: "SHA256"},
    {no: 2, name: "SHA512"},
    {no: 3, name: "KECCAK"},
    {no: 4, name: "RIPEMD160"},
    {no: 5, name: "BITCOIN"},
    {no: 6, name: "SHA512_256"},
  ],
);

/**
 *
 * LengthOp defines how to process the key and value of the LeafOp
 * to include length information. After encoding the length with the given
 * algorithm, the length will be prepended to the key and value bytes.
 * (Each one with it's own encoded length)
 *
 * @generated from enum cosmos.ics23.v1.LengthOp
 */
export const LengthOp = proto3.makeEnum(
  "cosmos.ics23.v1.LengthOp",
  [
    {no: 0, name: "NO_PREFIX"},
    {no: 1, name: "VAR_PROTO"},
    {no: 2, name: "VAR_RLP"},
    {no: 3, name: "FIXED32_BIG"},
    {no: 4, name: "FIXED32_LITTLE"},
    {no: 5, name: "FIXED64_BIG"},
    {no: 6, name: "FIXED64_LITTLE"},
    {no: 7, name: "REQUIRE_32_BYTES"},
    {no: 8, name: "REQUIRE_64_BYTES"},
  ],
);

/**
 *
 * ExistenceProof takes a key and a value and a set of steps to perform on it.
 * The result of peforming all these steps will provide a "root hash", which can
 * be compared to the value in a header.
 *
 * Since it is computationally infeasible to produce a hash collission for any of the used
 * cryptographic hash functions, if someone can provide a series of operations to transform
 * a given key and value into a root hash that matches some trusted root, these key and values
 * must be in the referenced merkle tree.
 *
 * The only possible issue is maliablity in LeafOp, such as providing extra prefix data,
 * which should be controlled by a spec. Eg. with lengthOp as NONE,
 * prefix = FOO, key = BAR, value = CHOICE
 * and
 * prefix = F, key = OOBAR, value = CHOICE
 * would produce the same value.
 *
 * With LengthOp this is tricker but not impossible. Which is why the "leafPrefixEqual" field
 * in the ProofSpec is valuable to prevent this mutability. And why all trees should
 * length-prefix the data before hashing it.
 *
 * @generated from message cosmos.ics23.v1.ExistenceProof
 */
export const ExistenceProof = proto3.makeMessageType(
  "cosmos.ics23.v1.ExistenceProof",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "leaf", kind: "message", T: LeafOp },
    { no: 4, name: "path", kind: "message", T: InnerOp, repeated: true },
  ],
);

/**
 *
 * NonExistenceProof takes a proof of two neighbors, one left of the desired key,
 * one right of the desired key. If both proofs are valid AND they are neighbors,
 * then there is no valid proof for the given key.
 *
 * @generated from message cosmos.ics23.v1.NonExistenceProof
 */
export const NonExistenceProof = proto3.makeMessageType(
  "cosmos.ics23.v1.NonExistenceProof",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "left", kind: "message", T: ExistenceProof },
    { no: 3, name: "right", kind: "message", T: ExistenceProof },
  ],
);

/**
 *
 * CommitmentProof is either an ExistenceProof or a NonExistenceProof, or a Batch of such messages
 *
 * @generated from message cosmos.ics23.v1.CommitmentProof
 */
export const CommitmentProof = proto3.makeMessageType(
  "cosmos.ics23.v1.CommitmentProof",
  () => [
    { no: 1, name: "exist", kind: "message", T: ExistenceProof, oneof: "proof" },
    { no: 2, name: "nonexist", kind: "message", T: NonExistenceProof, oneof: "proof" },
    { no: 3, name: "batch", kind: "message", T: BatchProof, oneof: "proof" },
    { no: 4, name: "compressed", kind: "message", T: CompressedBatchProof, oneof: "proof" },
  ],
);

/**
 *
 * LeafOp represents the raw key-value data we wish to prove, and
 * must be flexible to represent the internal transformation from
 * the original key-value pairs into the basis hash, for many existing
 * merkle trees.
 *
 * key and value are passed in. So that the signature of this operation is:
 * leafOp(key, value) -> output
 *
 * To process this, first prehash the keys and values if needed (ANY means no hash in this case):
 * hkey = prehashKey(key)
 * hvalue = prehashValue(value)
 *
 * Then combine the bytes, and hash it
 * output = hash(prefix || length(hkey) || hkey || length(hvalue) || hvalue)
 *
 * @generated from message cosmos.ics23.v1.LeafOp
 */
export const LeafOp = proto3.makeMessageType(
  "cosmos.ics23.v1.LeafOp",
  () => [
    { no: 1, name: "hash", kind: "enum", T: proto3.getEnumType(HashOp) },
    { no: 2, name: "prehash_key", kind: "enum", T: proto3.getEnumType(HashOp) },
    { no: 3, name: "prehash_value", kind: "enum", T: proto3.getEnumType(HashOp) },
    { no: 4, name: "length", kind: "enum", T: proto3.getEnumType(LengthOp) },
    { no: 5, name: "prefix", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 *
 * InnerOp represents a merkle-proof step that is not a leaf.
 * It represents concatenating two children and hashing them to provide the next result.
 *
 * The result of the previous step is passed in, so the signature of this op is:
 * innerOp(child) -> output
 *
 * The result of applying InnerOp should be:
 * output = op.hash(op.prefix || child || op.suffix)
 *
 * where the || operator is concatenation of binary data,
 * and child is the result of hashing all the tree below this step.
 *
 * Any special data, like prepending child with the length, or prepending the entire operation with
 * some value to differentiate from leaf nodes, should be included in prefix and suffix.
 * If either of prefix or suffix is empty, we just treat it as an empty string
 *
 * @generated from message cosmos.ics23.v1.InnerOp
 */
export const InnerOp = proto3.makeMessageType(
  "cosmos.ics23.v1.InnerOp",
  () => [
    { no: 1, name: "hash", kind: "enum", T: proto3.getEnumType(HashOp) },
    { no: 2, name: "prefix", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "suffix", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 *
 * ProofSpec defines what the expected parameters are for a given proof type.
 * This can be stored in the client and used to validate any incoming proofs.
 *
 * verify(ProofSpec, Proof) -> Proof | Error
 *
 * As demonstrated in tests, if we don't fix the algorithm used to calculate the
 * LeafHash for a given tree, there are many possible key-value pairs that can
 * generate a given hash (by interpretting the preimage differently).
 * We need this for proper security, requires client knows a priori what
 * tree format server uses. But not in code, rather a configuration object.
 *
 * @generated from message cosmos.ics23.v1.ProofSpec
 */
export const ProofSpec = proto3.makeMessageType(
  "cosmos.ics23.v1.ProofSpec",
  () => [
    { no: 1, name: "leaf_spec", kind: "message", T: LeafOp },
    { no: 2, name: "inner_spec", kind: "message", T: InnerSpec },
    { no: 3, name: "max_depth", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "min_depth", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 *
 * InnerSpec contains all store-specific structure info to determine if two proofs from a
 * given store are neighbors.
 *
 * This enables:
 *
 * isLeftMost(spec: InnerSpec, op: InnerOp)
 * isRightMost(spec: InnerSpec, op: InnerOp)
 * isLeftNeighbor(spec: InnerSpec, left: InnerOp, right: InnerOp)
 *
 * @generated from message cosmos.ics23.v1.InnerSpec
 */
export const InnerSpec = proto3.makeMessageType(
  "cosmos.ics23.v1.InnerSpec",
  () => [
    { no: 1, name: "child_order", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
    { no: 2, name: "child_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "min_prefix_length", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "max_prefix_length", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "empty_child", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 6, name: "hash", kind: "enum", T: proto3.getEnumType(HashOp) },
  ],
);

/**
 *
 * BatchProof is a group of multiple proof types than can be compressed
 *
 * @generated from message cosmos.ics23.v1.BatchProof
 */
export const BatchProof = proto3.makeMessageType(
  "cosmos.ics23.v1.BatchProof",
  () => [
    { no: 1, name: "entries", kind: "message", T: BatchEntry, repeated: true },
  ],
);

/**
 * Use BatchEntry not CommitmentProof, to avoid recursion
 *
 * @generated from message cosmos.ics23.v1.BatchEntry
 */
export const BatchEntry = proto3.makeMessageType(
  "cosmos.ics23.v1.BatchEntry",
  () => [
    { no: 1, name: "exist", kind: "message", T: ExistenceProof, oneof: "proof" },
    { no: 2, name: "nonexist", kind: "message", T: NonExistenceProof, oneof: "proof" },
  ],
);

/**
 * @generated from message cosmos.ics23.v1.CompressedBatchProof
 */
export const CompressedBatchProof = proto3.makeMessageType(
  "cosmos.ics23.v1.CompressedBatchProof",
  () => [
    { no: 1, name: "entries", kind: "message", T: CompressedBatchEntry, repeated: true },
    { no: 2, name: "lookup_inners", kind: "message", T: InnerOp, repeated: true },
  ],
);

/**
 * Use BatchEntry not CommitmentProof, to avoid recursion
 *
 * @generated from message cosmos.ics23.v1.CompressedBatchEntry
 */
export const CompressedBatchEntry = proto3.makeMessageType(
  "cosmos.ics23.v1.CompressedBatchEntry",
  () => [
    { no: 1, name: "exist", kind: "message", T: CompressedExistenceProof, oneof: "proof" },
    { no: 2, name: "nonexist", kind: "message", T: CompressedNonExistenceProof, oneof: "proof" },
  ],
);

/**
 * @generated from message cosmos.ics23.v1.CompressedExistenceProof
 */
export const CompressedExistenceProof = proto3.makeMessageType(
  "cosmos.ics23.v1.CompressedExistenceProof",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "leaf", kind: "message", T: LeafOp },
    { no: 4, name: "path", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
  ],
);

/**
 * @generated from message cosmos.ics23.v1.CompressedNonExistenceProof
 */
export const CompressedNonExistenceProof = proto3.makeMessageType(
  "cosmos.ics23.v1.CompressedNonExistenceProof",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "left", kind: "message", T: CompressedExistenceProof },
    { no: 3, name: "right", kind: "message", T: CompressedExistenceProof },
  ],
);


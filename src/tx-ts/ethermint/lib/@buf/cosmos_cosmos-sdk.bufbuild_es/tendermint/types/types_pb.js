// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es"
// @generated from file tendermint/types/types.proto (package tendermint.types, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { Proof } from "../crypto/proof_pb.js";
import { Consensus } from "../version/types_pb.js";
import { ValidatorSet } from "./validator_pb.js";

/**
 * BlockIdFlag indicates which BlcokID the signature is for
 *
 * @generated from enum tendermint.types.BlockIDFlag
 */
export const BlockIDFlag = proto3.makeEnum(
  "tendermint.types.BlockIDFlag",
  [
    {no: 0, name: "BLOCK_ID_FLAG_UNKNOWN"},
    {no: 1, name: "BLOCK_ID_FLAG_ABSENT"},
    {no: 2, name: "BLOCK_ID_FLAG_COMMIT"},
    {no: 3, name: "BLOCK_ID_FLAG_NIL"},
  ],
);

/**
 * SignedMsgType is a type of signed message in the consensus.
 *
 * @generated from enum tendermint.types.SignedMsgType
 */
export const SignedMsgType = proto3.makeEnum(
  "tendermint.types.SignedMsgType",
  [
    {no: 0, name: "SIGNED_MSG_TYPE_UNKNOWN", localName: "UNKNOWN"},
    {no: 1, name: "SIGNED_MSG_TYPE_PREVOTE", localName: "PREVOTE"},
    {no: 2, name: "SIGNED_MSG_TYPE_PRECOMMIT", localName: "PRECOMMIT"},
    {no: 32, name: "SIGNED_MSG_TYPE_PROPOSAL", localName: "PROPOSAL"},
  ],
);

/**
 * PartsetHeader
 *
 * @generated from message tendermint.types.PartSetHeader
 */
export const PartSetHeader = proto3.makeMessageType(
  "tendermint.types.PartSetHeader",
  () => [
    { no: 1, name: "total", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * @generated from message tendermint.types.Part
 */
export const Part = proto3.makeMessageType(
  "tendermint.types.Part",
  () => [
    { no: 1, name: "index", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "bytes", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "proof", kind: "message", T: Proof },
  ],
);

/**
 * BlockID
 *
 * @generated from message tendermint.types.BlockID
 */
export const BlockID = proto3.makeMessageType(
  "tendermint.types.BlockID",
  () => [
    { no: 1, name: "hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "part_set_header", kind: "message", T: PartSetHeader },
  ],
);

/**
 * Header defines the structure of a Tendermint block header.
 *
 * @generated from message tendermint.types.Header
 */
export const Header = proto3.makeMessageType(
  "tendermint.types.Header",
  () => [
    { no: 1, name: "version", kind: "message", T: Consensus },
    { no: 2, name: "chain_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "time", kind: "message", T: Timestamp },
    { no: 5, name: "last_block_id", kind: "message", T: BlockID },
    { no: 6, name: "last_commit_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 7, name: "data_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 8, name: "validators_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 9, name: "next_validators_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 10, name: "consensus_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 11, name: "app_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 12, name: "last_results_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 13, name: "evidence_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 14, name: "proposer_address", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * Data contains the set of transactions included in the block
 *
 * @generated from message tendermint.types.Data
 */
export const Data = proto3.makeMessageType(
  "tendermint.types.Data",
  () => [
    { no: 1, name: "txs", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
  ],
);

/**
 * Vote represents a prevote, precommit, or commit vote from validators for
 * consensus.
 *
 * @generated from message tendermint.types.Vote
 */
export const Vote = proto3.makeMessageType(
  "tendermint.types.Vote",
  () => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(SignedMsgType) },
    { no: 2, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "round", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "block_id", kind: "message", T: BlockID },
    { no: 5, name: "timestamp", kind: "message", T: Timestamp },
    { no: 6, name: "validator_address", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 7, name: "validator_index", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 8, name: "signature", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * Commit contains the evidence that a block was committed by a set of validators.
 *
 * @generated from message tendermint.types.Commit
 */
export const Commit = proto3.makeMessageType(
  "tendermint.types.Commit",
  () => [
    { no: 1, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "round", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "block_id", kind: "message", T: BlockID },
    { no: 4, name: "signatures", kind: "message", T: CommitSig, repeated: true },
  ],
);

/**
 * CommitSig is a part of the Vote included in a Commit.
 *
 * @generated from message tendermint.types.CommitSig
 */
export const CommitSig = proto3.makeMessageType(
  "tendermint.types.CommitSig",
  () => [
    { no: 1, name: "block_id_flag", kind: "enum", T: proto3.getEnumType(BlockIDFlag) },
    { no: 2, name: "validator_address", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "timestamp", kind: "message", T: Timestamp },
    { no: 4, name: "signature", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * @generated from message tendermint.types.Proposal
 */
export const Proposal = proto3.makeMessageType(
  "tendermint.types.Proposal",
  () => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(SignedMsgType) },
    { no: 2, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "round", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "pol_round", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "block_id", kind: "message", T: BlockID },
    { no: 6, name: "timestamp", kind: "message", T: Timestamp },
    { no: 7, name: "signature", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * @generated from message tendermint.types.SignedHeader
 */
export const SignedHeader = proto3.makeMessageType(
  "tendermint.types.SignedHeader",
  () => [
    { no: 1, name: "header", kind: "message", T: Header },
    { no: 2, name: "commit", kind: "message", T: Commit },
  ],
);

/**
 * @generated from message tendermint.types.LightBlock
 */
export const LightBlock = proto3.makeMessageType(
  "tendermint.types.LightBlock",
  () => [
    { no: 1, name: "signed_header", kind: "message", T: SignedHeader },
    { no: 2, name: "validator_set", kind: "message", T: ValidatorSet },
  ],
);

/**
 * @generated from message tendermint.types.BlockMeta
 */
export const BlockMeta = proto3.makeMessageType(
  "tendermint.types.BlockMeta",
  () => [
    { no: 1, name: "block_id", kind: "message", T: BlockID },
    { no: 2, name: "block_size", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "header", kind: "message", T: Header },
    { no: 4, name: "num_txs", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree.
 *
 * @generated from message tendermint.types.TxProof
 */
export const TxProof = proto3.makeMessageType(
  "tendermint.types.TxProof",
  () => [
    { no: 1, name: "root_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "proof", kind: "message", T: Proof },
  ],
);


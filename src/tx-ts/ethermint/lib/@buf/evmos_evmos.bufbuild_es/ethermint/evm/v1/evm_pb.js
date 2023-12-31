// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es,rewrite_imports=./cosmos/vesting/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/msg/v1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/base/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/base/query/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/bank/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/auth/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./amino/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es"
// @generated from file ethermint/evm/v1/evm.proto (package ethermint.evm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * Params defines the EVM module parameters
 *
 * @generated from message ethermint.evm.v1.Params
 */
export const Params = proto3.makeMessageType(
  "ethermint.evm.v1.Params",
  () => [
    { no: 1, name: "evm_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "enable_create", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "enable_call", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "extra_eips", kind: "scalar", T: 3 /* ScalarType.INT64 */, repeated: true },
    { no: 5, name: "chain_config", kind: "message", T: ChainConfig },
    { no: 6, name: "allow_unprotected_txs", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * ChainConfig defines the Ethereum ChainConfig parameters using *sdk.Int values
 * instead of *big.Int.
 *
 * @generated from message ethermint.evm.v1.ChainConfig
 */
export const ChainConfig = proto3.makeMessageType(
  "ethermint.evm.v1.ChainConfig",
  () => [
    { no: 1, name: "homestead_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "dao_fork_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "dao_fork_support", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "eip150_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "eip150_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "eip155_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "eip158_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "byzantium_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "constantinople_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "petersburg_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 11, name: "istanbul_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "muir_glacier_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 13, name: "berlin_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 17, name: "london_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "arrow_glacier_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "gray_glacier_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 21, name: "merge_netsplit_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 22, name: "shanghai_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 23, name: "cancun_block", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * State represents a single Storage key value pair item.
 *
 * @generated from message ethermint.evm.v1.State
 */
export const State = proto3.makeMessageType(
  "ethermint.evm.v1.State",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * TransactionLogs define the logs generated from a transaction execution
 * with a given hash. It it used for import/export data as transactions are not
 * persisted on blockchain state after an upgrade.
 *
 * @generated from message ethermint.evm.v1.TransactionLogs
 */
export const TransactionLogs = proto3.makeMessageType(
  "ethermint.evm.v1.TransactionLogs",
  () => [
    { no: 1, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "logs", kind: "message", T: Log, repeated: true },
  ],
);

/**
 * Log represents an protobuf compatible Ethereum Log that defines a contract
 * log event. These events are generated by the LOG opcode and stored/indexed by
 * the node.
 *
 * NOTE: address, topics and data are consensus fields. The rest of the fields
 * are derived, i.e. filled in by the nodes, but not secured by consensus.
 *
 * @generated from message ethermint.evm.v1.Log
 */
export const Log = proto3.makeMessageType(
  "ethermint.evm.v1.Log",
  () => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "topics", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "block_number", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "tx_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "tx_index", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "block_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "index", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 9, name: "removed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * TxResult stores results of Tx execution.
 *
 * @generated from message ethermint.evm.v1.TxResult
 */
export const TxResult = proto3.makeMessageType(
  "ethermint.evm.v1.TxResult",
  () => [
    { no: 1, name: "contract_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "bloom", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "tx_logs", kind: "message", T: TransactionLogs },
    { no: 4, name: "ret", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "reverted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "gas_used", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * AccessTuple is the element type of an access list.
 *
 * @generated from message ethermint.evm.v1.AccessTuple
 */
export const AccessTuple = proto3.makeMessageType(
  "ethermint.evm.v1.AccessTuple",
  () => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "storage_keys", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * TraceConfig holds extra parameters to trace functions.
 *
 * @generated from message ethermint.evm.v1.TraceConfig
 */
export const TraceConfig = proto3.makeMessageType(
  "ethermint.evm.v1.TraceConfig",
  () => [
    { no: 1, name: "tracer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "timeout", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "reexec", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "disable_stack", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "disable_storage", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 8, name: "debug", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 9, name: "limit", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 10, name: "overrides", kind: "message", T: ChainConfig },
    { no: 11, name: "enable_memory", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 12, name: "enable_return_data", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 13, name: "tracer_json_config", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);


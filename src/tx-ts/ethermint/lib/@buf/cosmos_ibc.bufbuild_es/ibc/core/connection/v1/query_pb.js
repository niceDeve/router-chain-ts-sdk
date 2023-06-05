// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./tendermint/version/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./tendermint/types/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./tendermint/crypto/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es,rewrite_imports=./cosmos/upgrade/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/ics23/v1/**/*_pb.js:@buf/cosmos_ics23.bufbuild_es,rewrite_imports=./cosmos/base/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/base/query/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/auth/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./amino/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es"
// @generated from file ibc/core/connection/v1/query.proto (package ibc.core.connection.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Any, proto3 } from "@bufbuild/protobuf";
import { ConnectionEnd, IdentifiedConnection, Params } from "./connection_pb.js";
import { Height, IdentifiedClientState } from "../../client/v1/client_pb.js";
import { PageRequest, PageResponse } from "@buf/cosmos_cosmos-sdk.bufbuild_es/cosmos/base/query/v1beta1/pagination_pb.js";

/**
 * QueryConnectionRequest is the request type for the Query/Connection RPC
 * method
 *
 * @generated from message ibc.core.connection.v1.QueryConnectionRequest
 */
export const QueryConnectionRequest = proto3.makeMessageType(
  "ibc.core.connection.v1.QueryConnectionRequest",
  () => [
    { no: 1, name: "connection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 *
 * @generated from message ibc.core.connection.v1.QueryConnectionResponse
 */
export const QueryConnectionResponse = proto3.makeMessageType(
  "ibc.core.connection.v1.QueryConnectionResponse",
  () => [
    { no: 1, name: "connection", kind: "message", T: ConnectionEnd },
    { no: 2, name: "proof", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "proof_height", kind: "message", T: Height },
  ],
);

/**
 * QueryConnectionsRequest is the request type for the Query/Connections RPC
 * method
 *
 * @generated from message ibc.core.connection.v1.QueryConnectionsRequest
 */
export const QueryConnectionsRequest = proto3.makeMessageType(
  "ibc.core.connection.v1.QueryConnectionsRequest",
  () => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ],
);

/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 *
 * @generated from message ibc.core.connection.v1.QueryConnectionsResponse
 */
export const QueryConnectionsResponse = proto3.makeMessageType(
  "ibc.core.connection.v1.QueryConnectionsResponse",
  () => [
    { no: 1, name: "connections", kind: "message", T: IdentifiedConnection, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
    { no: 3, name: "height", kind: "message", T: Height },
  ],
);

/**
 * QueryClientConnectionsRequest is the request type for the
 * Query/ClientConnections RPC method
 *
 * @generated from message ibc.core.connection.v1.QueryClientConnectionsRequest
 */
export const QueryClientConnectionsRequest = proto3.makeMessageType(
  "ibc.core.connection.v1.QueryClientConnectionsRequest",
  () => [
    { no: 1, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 *
 * @generated from message ibc.core.connection.v1.QueryClientConnectionsResponse
 */
export const QueryClientConnectionsResponse = proto3.makeMessageType(
  "ibc.core.connection.v1.QueryClientConnectionsResponse",
  () => [
    { no: 1, name: "connection_paths", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "proof", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "proof_height", kind: "message", T: Height },
  ],
);

/**
 * QueryConnectionClientStateRequest is the request type for the
 * Query/ConnectionClientState RPC method
 *
 * @generated from message ibc.core.connection.v1.QueryConnectionClientStateRequest
 */
export const QueryConnectionClientStateRequest = proto3.makeMessageType(
  "ibc.core.connection.v1.QueryConnectionClientStateRequest",
  () => [
    { no: 1, name: "connection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 *
 * @generated from message ibc.core.connection.v1.QueryConnectionClientStateResponse
 */
export const QueryConnectionClientStateResponse = proto3.makeMessageType(
  "ibc.core.connection.v1.QueryConnectionClientStateResponse",
  () => [
    { no: 1, name: "identified_client_state", kind: "message", T: IdentifiedClientState },
    { no: 2, name: "proof", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "proof_height", kind: "message", T: Height },
  ],
);

/**
 * QueryConnectionConsensusStateRequest is the request type for the
 * Query/ConnectionConsensusState RPC method
 *
 * @generated from message ibc.core.connection.v1.QueryConnectionConsensusStateRequest
 */
export const QueryConnectionConsensusStateRequest = proto3.makeMessageType(
  "ibc.core.connection.v1.QueryConnectionConsensusStateRequest",
  () => [
    { no: 1, name: "connection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "revision_number", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "revision_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 *
 * @generated from message ibc.core.connection.v1.QueryConnectionConsensusStateResponse
 */
export const QueryConnectionConsensusStateResponse = proto3.makeMessageType(
  "ibc.core.connection.v1.QueryConnectionConsensusStateResponse",
  () => [
    { no: 1, name: "consensus_state", kind: "message", T: Any },
    { no: 2, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "proof", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "proof_height", kind: "message", T: Height },
  ],
);

/**
 * QueryConnectionParamsRequest is the request type for the Query/ConnectionParams RPC method.
 *
 * @generated from message ibc.core.connection.v1.QueryConnectionParamsRequest
 */
export const QueryConnectionParamsRequest = proto3.makeMessageType(
  "ibc.core.connection.v1.QueryConnectionParamsRequest",
  [],
);

/**
 * QueryConnectionParamsResponse is the response type for the Query/ConnectionParams RPC method.
 *
 * @generated from message ibc.core.connection.v1.QueryConnectionParamsResponse
 */
export const QueryConnectionParamsResponse = proto3.makeMessageType(
  "ibc.core.connection.v1.QueryConnectionParamsResponse",
  () => [
    { no: 1, name: "params", kind: "message", T: Params },
  ],
);


// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es"
// @generated from file cosmos/mint/v1beta1/query.proto (package cosmos.mint.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Params } from "./mint_pb.js";

/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryParamsRequest
 */
export const QueryParamsRequest = proto3.makeMessageType(
  "cosmos.mint.v1beta1.QueryParamsRequest",
  [],
);

/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryParamsResponse
 */
export const QueryParamsResponse = proto3.makeMessageType(
  "cosmos.mint.v1beta1.QueryParamsResponse",
  () => [
    { no: 1, name: "params", kind: "message", T: Params },
  ],
);

/**
 * QueryInflationRequest is the request type for the Query/Inflation RPC method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryInflationRequest
 */
export const QueryInflationRequest = proto3.makeMessageType(
  "cosmos.mint.v1beta1.QueryInflationRequest",
  [],
);

/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryInflationResponse
 */
export const QueryInflationResponse = proto3.makeMessageType(
  "cosmos.mint.v1beta1.QueryInflationResponse",
  () => [
    { no: 1, name: "inflation", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryAnnualProvisionsRequest
 */
export const QueryAnnualProvisionsRequest = proto3.makeMessageType(
  "cosmos.mint.v1beta1.QueryAnnualProvisionsRequest",
  [],
);

/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryAnnualProvisionsResponse
 */
export const QueryAnnualProvisionsResponse = proto3.makeMessageType(
  "cosmos.mint.v1beta1.QueryAnnualProvisionsResponse",
  () => [
    { no: 1, name: "annual_provisions", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);


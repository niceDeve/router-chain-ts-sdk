// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es,rewrite_imports=./cosmos/vesting/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/msg/v1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/base/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/base/query/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/bank/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/auth/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./amino/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es"
// @generated from file evmos/incentives/v1/query.proto (package evmos.incentives.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { PageRequest, PageResponse } from "@buf/cosmos_cosmos-sdk.bufbuild_es/cosmos/base/query/v1beta1/pagination_pb.js";
import { GasMeter, Incentive } from "./incentives_pb.js";
import { DecCoin } from "@buf/cosmos_cosmos-sdk.bufbuild_es/cosmos/base/v1beta1/coin_pb.js";
import { Params } from "./genesis_pb.js";

/**
 * QueryIncentivesRequest is the request type for the Query/Incentives RPC
 * method.
 *
 * @generated from message evmos.incentives.v1.QueryIncentivesRequest
 */
export const QueryIncentivesRequest = proto3.makeMessageType(
  "evmos.incentives.v1.QueryIncentivesRequest",
  () => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ],
);

/**
 * QueryIncentivesResponse is the response type for the Query/Incentives RPC
 * method.
 *
 * @generated from message evmos.incentives.v1.QueryIncentivesResponse
 */
export const QueryIncentivesResponse = proto3.makeMessageType(
  "evmos.incentives.v1.QueryIncentivesResponse",
  () => [
    { no: 1, name: "incentives", kind: "message", T: Incentive, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ],
);

/**
 * QueryIncentiveRequest is the request type for the Query/Incentive RPC method.
 *
 * @generated from message evmos.incentives.v1.QueryIncentiveRequest
 */
export const QueryIncentiveRequest = proto3.makeMessageType(
  "evmos.incentives.v1.QueryIncentiveRequest",
  () => [
    { no: 1, name: "contract", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * QueryIncentiveResponse is the response type for the Query/Incentive RPC
 * method.
 *
 * @generated from message evmos.incentives.v1.QueryIncentiveResponse
 */
export const QueryIncentiveResponse = proto3.makeMessageType(
  "evmos.incentives.v1.QueryIncentiveResponse",
  () => [
    { no: 1, name: "incentive", kind: "message", T: Incentive },
  ],
);

/**
 * QueryGasMetersRequest is the request type for the Query/Incentives RPC
 * method.
 *
 * @generated from message evmos.incentives.v1.QueryGasMetersRequest
 */
export const QueryGasMetersRequest = proto3.makeMessageType(
  "evmos.incentives.v1.QueryGasMetersRequest",
  () => [
    { no: 1, name: "contract", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
  ],
);

/**
 * QueryGasMetersResponse is the response type for the Query/Incentives RPC
 * method.
 *
 * @generated from message evmos.incentives.v1.QueryGasMetersResponse
 */
export const QueryGasMetersResponse = proto3.makeMessageType(
  "evmos.incentives.v1.QueryGasMetersResponse",
  () => [
    { no: 1, name: "gas_meters", kind: "message", T: GasMeter, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ],
);

/**
 * QueryGasMeterRequest is the request type for the Query/Incentive RPC method.
 *
 * @generated from message evmos.incentives.v1.QueryGasMeterRequest
 */
export const QueryGasMeterRequest = proto3.makeMessageType(
  "evmos.incentives.v1.QueryGasMeterRequest",
  () => [
    { no: 1, name: "contract", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "participant", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * QueryGasMeterResponse is the response type for the Query/Incentive RPC
 * method.
 *
 * @generated from message evmos.incentives.v1.QueryGasMeterResponse
 */
export const QueryGasMeterResponse = proto3.makeMessageType(
  "evmos.incentives.v1.QueryGasMeterResponse",
  () => [
    { no: 1, name: "gas_meter", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * QueryAllocationMetersRequest is the request type for the
 * Query/AllocationMeters RPC method.
 *
 * @generated from message evmos.incentives.v1.QueryAllocationMetersRequest
 */
export const QueryAllocationMetersRequest = proto3.makeMessageType(
  "evmos.incentives.v1.QueryAllocationMetersRequest",
  () => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ],
);

/**
 * QueryAllocationMetersResponse is the response type for the
 * Query/AllocationMeters RPC method.
 *
 * @generated from message evmos.incentives.v1.QueryAllocationMetersResponse
 */
export const QueryAllocationMetersResponse = proto3.makeMessageType(
  "evmos.incentives.v1.QueryAllocationMetersResponse",
  () => [
    { no: 1, name: "allocation_meters", kind: "message", T: DecCoin, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ],
);

/**
 * QueryAllocationMeterRequest is the request type for the Query/AllocationMeter
 * RPC method.
 *
 * @generated from message evmos.incentives.v1.QueryAllocationMeterRequest
 */
export const QueryAllocationMeterRequest = proto3.makeMessageType(
  "evmos.incentives.v1.QueryAllocationMeterRequest",
  () => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * QueryAllocationMeterResponse is the response type for the
 * Query/AllocationMeter RPC method.
 *
 * @generated from message evmos.incentives.v1.QueryAllocationMeterResponse
 */
export const QueryAllocationMeterResponse = proto3.makeMessageType(
  "evmos.incentives.v1.QueryAllocationMeterResponse",
  () => [
    { no: 1, name: "allocation_meter", kind: "message", T: DecCoin },
  ],
);

/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message evmos.incentives.v1.QueryParamsRequest
 */
export const QueryParamsRequest = proto3.makeMessageType(
  "evmos.incentives.v1.QueryParamsRequest",
  [],
);

/**
 * QueryParamsResponse is the response type for the Query/Params RPC
 * method.
 *
 * @generated from message evmos.incentives.v1.QueryParamsResponse
 */
export const QueryParamsResponse = proto3.makeMessageType(
  "evmos.incentives.v1.QueryParamsResponse",
  () => [
    { no: 1, name: "params", kind: "message", T: Params },
  ],
);


// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es"
// @generated from file cosmos/slashing/v1beta1/slashing.proto (package cosmos.slashing.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Duration, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 *
 * @generated from message cosmos.slashing.v1beta1.ValidatorSigningInfo
 */
export const ValidatorSigningInfo = proto3.makeMessageType(
  "cosmos.slashing.v1beta1.ValidatorSigningInfo",
  () => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "start_height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "index_offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "jailed_until", kind: "message", T: Timestamp },
    { no: 5, name: "tombstoned", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "missed_blocks_counter", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * Params represents the parameters used for by the slashing module.
 *
 * @generated from message cosmos.slashing.v1beta1.Params
 */
export const Params = proto3.makeMessageType(
  "cosmos.slashing.v1beta1.Params",
  () => [
    { no: 1, name: "signed_blocks_window", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "min_signed_per_window", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "downtime_jail_duration", kind: "message", T: Duration },
    { no: 4, name: "slash_fraction_double_sign", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "slash_fraction_downtime", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);


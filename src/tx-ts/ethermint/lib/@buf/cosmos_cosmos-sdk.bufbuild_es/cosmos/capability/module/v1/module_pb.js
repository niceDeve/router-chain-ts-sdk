// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es"
// @generated from file cosmos/capability/module/v1/module.proto (package cosmos.capability.module.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * Module is the config object of the capability module.
 *
 * @generated from message cosmos.capability.module.v1.Module
 */
export const Module = proto3.makeMessageType(
  "cosmos.capability.module.v1.Module",
  () => [
    { no: 1, name: "seal_keeper", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);


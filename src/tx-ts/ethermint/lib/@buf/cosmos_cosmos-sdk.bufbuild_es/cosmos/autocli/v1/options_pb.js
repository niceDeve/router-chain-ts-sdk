// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es"
// @generated from file cosmos/autocli/v1/options.proto (package cosmos.autocli.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * ModuleOptions describes the CLI options for a Cosmos SDK module.
 *
 * @generated from message cosmos.autocli.v1.ModuleOptions
 */
export const ModuleOptions = proto3.makeMessageType(
  "cosmos.autocli.v1.ModuleOptions",
  () => [
    { no: 1, name: "tx", kind: "message", T: ServiceCommandDescriptor },
    { no: 2, name: "query", kind: "message", T: ServiceCommandDescriptor },
  ],
);

/**
 * ServiceCommandDescriptor describes a CLI command based on a protobuf service.
 *
 * @generated from message cosmos.autocli.v1.ServiceCommandDescriptor
 */
export const ServiceCommandDescriptor = proto3.makeMessageType(
  "cosmos.autocli.v1.ServiceCommandDescriptor",
  () => [
    { no: 1, name: "service", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "rpc_command_options", kind: "message", T: RpcCommandOptions, repeated: true },
    { no: 3, name: "sub_commands", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: ServiceCommandDescriptor} },
  ],
);

/**
 * RpcCommandOptions specifies options for commands generated from protobuf
 * rpc methods.
 *
 * @generated from message cosmos.autocli.v1.RpcCommandOptions
 */
export const RpcCommandOptions = proto3.makeMessageType(
  "cosmos.autocli.v1.RpcCommandOptions",
  () => [
    { no: 1, name: "rpc_method", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "use", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "long", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "short", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "example", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "alias", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 7, name: "suggest_for", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 8, name: "deprecated", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "flag_options", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: FlagOptions} },
    { no: 11, name: "positional_args", kind: "message", T: PositionalArgDescriptor, repeated: true },
    { no: 12, name: "skip", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * FlagOptions are options for flags generated from rpc request fields.
 * By default, all request fields are configured as flags based on the
 * kebab-case name of the field. Fields can be turned into positional arguments
 * instead by using RpcCommandOptions.positional_args.
 *
 * @generated from message cosmos.autocli.v1.FlagOptions
 */
export const FlagOptions = proto3.makeMessageType(
  "cosmos.autocli.v1.FlagOptions",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "shorthand", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "usage", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "default_value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "no_opt_default_value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "deprecated", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "shorthand_deprecated", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "hidden", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * PositionalArgDescriptor describes a positional argument.
 *
 * @generated from message cosmos.autocli.v1.PositionalArgDescriptor
 */
export const PositionalArgDescriptor = proto3.makeMessageType(
  "cosmos.autocli.v1.PositionalArgDescriptor",
  () => [
    { no: 1, name: "proto_field", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "varargs", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);


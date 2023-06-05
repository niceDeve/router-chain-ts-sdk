// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es"
// @generated from file cosmos/crisis/v1beta1/genesis.proto (package cosmos.crisis.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";

/**
 * GenesisState defines the crisis module's genesis state.
 *
 * @generated from message cosmos.crisis.v1beta1.GenesisState
 */
export const GenesisState = proto3.makeMessageType(
  "cosmos.crisis.v1beta1.GenesisState",
  () => [
    { no: 3, name: "constant_fee", kind: "message", T: Coin },
  ],
);

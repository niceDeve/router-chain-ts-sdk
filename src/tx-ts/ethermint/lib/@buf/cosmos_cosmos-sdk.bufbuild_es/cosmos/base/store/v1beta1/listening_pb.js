// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es"
// @generated from file cosmos/base/store/v1beta1/listening.proto (package cosmos.base.store.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * StoreKVPair is a KVStore KVPair used for listening to state changes (Sets and Deletes)
 * It optionally includes the StoreKey for the originating KVStore and a Boolean flag to distinguish between Sets and
 * Deletes
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from message cosmos.base.store.v1beta1.StoreKVPair
 */
export const StoreKVPair = proto3.makeMessageType(
  "cosmos.base.store.v1beta1.StoreKVPair",
  () => [
    { no: 1, name: "store_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "delete", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);


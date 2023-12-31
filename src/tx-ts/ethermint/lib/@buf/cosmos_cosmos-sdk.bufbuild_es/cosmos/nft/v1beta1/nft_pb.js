// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es"
// @generated from file cosmos/nft/v1beta1/nft.proto (package cosmos.nft.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Any, proto3 } from "@bufbuild/protobuf";

/**
 * Class defines the class of the nft type.
 *
 * @generated from message cosmos.nft.v1beta1.Class
 */
export const Class = proto3.makeMessageType(
  "cosmos.nft.v1beta1.Class",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "symbol", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "uri_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "data", kind: "message", T: Any },
  ],
);

/**
 * NFT defines the NFT.
 *
 * @generated from message cosmos.nft.v1beta1.NFT
 */
export const NFT = proto3.makeMessageType(
  "cosmos.nft.v1beta1.NFT",
  () => [
    { no: 1, name: "class_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "uri_hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "data", kind: "message", T: Any },
  ],
);


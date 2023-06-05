// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es"
// @generated from file cosmos/nft/v1beta1/event.proto (package cosmos.nft.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * EventSend is emitted on Msg/Send
 *
 * @generated from message cosmos.nft.v1beta1.EventSend
 */
export const EventSend = proto3.makeMessageType(
  "cosmos.nft.v1beta1.EventSend",
  () => [
    { no: 1, name: "class_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "receiver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * EventMint is emitted on Mint
 *
 * @generated from message cosmos.nft.v1beta1.EventMint
 */
export const EventMint = proto3.makeMessageType(
  "cosmos.nft.v1beta1.EventMint",
  () => [
    { no: 1, name: "class_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * EventBurn is emitted on Burn
 *
 * @generated from message cosmos.nft.v1beta1.EventBurn
 */
export const EventBurn = proto3.makeMessageType(
  "cosmos.nft.v1beta1.EventBurn",
  () => [
    { no: 1, name: "class_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

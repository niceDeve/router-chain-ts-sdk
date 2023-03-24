// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es,rewrite_imports=./cosmos/vesting/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/msg/v1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/base/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/base/query/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/bank/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/auth/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./amino/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es"
// @generated from file evmos/erc20/v1/tx.proto (package evmos.erc20.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Coin } from "@buf/cosmos_cosmos-sdk.bufbuild_es/cosmos/base/v1beta1/coin_pb.js";
import { Params } from "./genesis_pb.js";

/**
 * MsgConvertCoin defines a Msg to convert a native Cosmos coin to a ERC20 token
 *
 * @generated from message evmos.erc20.v1.MsgConvertCoin
 */
export const MsgConvertCoin = proto3.makeMessageType(
  "evmos.erc20.v1.MsgConvertCoin",
  () => [
    { no: 1, name: "coin", kind: "message", T: Coin },
    { no: 2, name: "receiver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * MsgConvertCoinResponse returns no fields
 *
 * @generated from message evmos.erc20.v1.MsgConvertCoinResponse
 */
export const MsgConvertCoinResponse = proto3.makeMessageType(
  "evmos.erc20.v1.MsgConvertCoinResponse",
  [],
);

/**
 * MsgConvertERC20 defines a Msg to convert a ERC20 token to a native Cosmos
 * coin.
 *
 * @generated from message evmos.erc20.v1.MsgConvertERC20
 */
export const MsgConvertERC20 = proto3.makeMessageType(
  "evmos.erc20.v1.MsgConvertERC20",
  () => [
    { no: 1, name: "contract_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "receiver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * MsgConvertERC20Response returns no fields
 *
 * @generated from message evmos.erc20.v1.MsgConvertERC20Response
 */
export const MsgConvertERC20Response = proto3.makeMessageType(
  "evmos.erc20.v1.MsgConvertERC20Response",
  [],
);

/**
 * MsgUpdateParams is the Msg/UpdateParams request type for Erc20 parameters.
 * Since: cosmos-sdk 0.47
 *
 * @generated from message evmos.erc20.v1.MsgUpdateParams
 */
export const MsgUpdateParams = proto3.makeMessageType(
  "evmos.erc20.v1.MsgUpdateParams",
  () => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "params", kind: "message", T: Params },
  ],
);

/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * Since: cosmos-sdk 0.47
 *
 * @generated from message evmos.erc20.v1.MsgUpdateParamsResponse
 */
export const MsgUpdateParamsResponse = proto3.makeMessageType(
  "evmos.erc20.v1.MsgUpdateParamsResponse",
  [],
);


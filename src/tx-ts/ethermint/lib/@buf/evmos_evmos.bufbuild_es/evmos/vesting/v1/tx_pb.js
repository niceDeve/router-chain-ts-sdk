// @generated by protoc-gen-es v1.0.0 with parameter "rewrite_imports=./google/api/**/*_pb.js:@buf/googleapis_googleapis.bufbuild_es,rewrite_imports=./gogoproto/**/*_pb.js:@buf/cosmos_gogo-proto.bufbuild_es,rewrite_imports=./cosmos_proto/**/*_pb.js:@buf/cosmos_cosmos-proto.bufbuild_es,rewrite_imports=./cosmos/vesting/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/msg/v1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/base/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/base/query/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/bank/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./cosmos/auth/v1beta1/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es,rewrite_imports=./amino/**/*_pb.js:@buf/cosmos_cosmos-sdk.bufbuild_es"
// @generated from file evmos/vesting/v1/tx.proto (package evmos.vesting.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, Timestamp } from "@bufbuild/protobuf";
import { Period } from "@buf/cosmos_cosmos-sdk.bufbuild_es/cosmos/vesting/v1beta1/vesting_pb.js";

/**
 * MsgCreateClawbackVestingAccount defines a message that enables creating a
 * ClawbackVestingAccount.
 *
 * @generated from message evmos.vesting.v1.MsgCreateClawbackVestingAccount
 */
export const MsgCreateClawbackVestingAccount = proto3.makeMessageType(
  "evmos.vesting.v1.MsgCreateClawbackVestingAccount",
  () => [
    { no: 1, name: "from_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "to_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "start_time", kind: "message", T: Timestamp },
    { no: 4, name: "lockup_periods", kind: "message", T: Period, repeated: true },
    { no: 5, name: "vesting_periods", kind: "message", T: Period, repeated: true },
    { no: 6, name: "merge", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * MsgCreateClawbackVestingAccountResponse defines the
 * MsgCreateClawbackVestingAccount response type.
 *
 * @generated from message evmos.vesting.v1.MsgCreateClawbackVestingAccountResponse
 */
export const MsgCreateClawbackVestingAccountResponse = proto3.makeMessageType(
  "evmos.vesting.v1.MsgCreateClawbackVestingAccountResponse",
  [],
);

/**
 * MsgClawback defines a message that removes unvested tokens from a
 * ClawbackVestingAccount.
 *
 * @generated from message evmos.vesting.v1.MsgClawback
 */
export const MsgClawback = proto3.makeMessageType(
  "evmos.vesting.v1.MsgClawback",
  () => [
    { no: 1, name: "funder_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "account_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "dest_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * MsgClawbackResponse defines the MsgClawback response type.
 *
 * @generated from message evmos.vesting.v1.MsgClawbackResponse
 */
export const MsgClawbackResponse = proto3.makeMessageType(
  "evmos.vesting.v1.MsgClawbackResponse",
  [],
);

/**
 * MsgUpdateVestingFunder defines a message that updates the funder account of a
 * ClawbackVestingAccount.
 *
 * @generated from message evmos.vesting.v1.MsgUpdateVestingFunder
 */
export const MsgUpdateVestingFunder = proto3.makeMessageType(
  "evmos.vesting.v1.MsgUpdateVestingFunder",
  () => [
    { no: 1, name: "funder_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "new_funder_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "vesting_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * MsgUpdateVestingFunderResponse defines the MsgUpdateVestingFunder response
 * type.
 *
 * @generated from message evmos.vesting.v1.MsgUpdateVestingFunderResponse
 */
export const MsgUpdateVestingFunderResponse = proto3.makeMessageType(
  "evmos.vesting.v1.MsgUpdateVestingFunderResponse",
  [],
);

/**
 * MsgConvertVestingAccount defines a message that enables converting a vesting account to a eth account
 *
 * @generated from message evmos.vesting.v1.MsgConvertVestingAccount
 */
export const MsgConvertVestingAccount = proto3.makeMessageType(
  "evmos.vesting.v1.MsgConvertVestingAccount",
  () => [
    { no: 1, name: "vesting_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * MsgConvertVestingAccountResponse defines the MsgConvertVestingAccount response type.
 *
 * @generated from message evmos.vesting.v1.MsgConvertVestingAccountResponse
 */
export const MsgConvertVestingAccountResponse = proto3.makeMessageType(
  "evmos.vesting.v1.MsgConvertVestingAccountResponse",
  [],
);

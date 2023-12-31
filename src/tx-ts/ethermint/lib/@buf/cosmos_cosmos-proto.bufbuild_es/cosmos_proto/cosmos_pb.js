// @generated by protoc-gen-es v1.0.0
// @generated from file cosmos_proto/cosmos.proto (package cosmos_proto, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum cosmos_proto.ScalarType
 */
export const ScalarType = proto3.makeEnum(
  "cosmos_proto.ScalarType",
  [
    {no: 0, name: "SCALAR_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "SCALAR_TYPE_STRING", localName: "STRING"},
    {no: 2, name: "SCALAR_TYPE_BYTES", localName: "BYTES"},
  ],
);

/**
 * InterfaceDescriptor describes an interface type to be used with
 * accepts_interface and implements_interface and declared by declare_interface.
 *
 * @generated from message cosmos_proto.InterfaceDescriptor
 */
export const InterfaceDescriptor = proto3.makeMessageType(
  "cosmos_proto.InterfaceDescriptor",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * ScalarDescriptor describes an scalar type to be used with
 * the scalar field option and declared by declare_scalar.
 * Scalars extend simple protobuf built-in types with additional
 * syntax and semantics, for instance to represent big integers.
 * Scalars should ideally define an encoding such that there is only one
 * valid syntactical representation for a given semantic meaning,
 * i.e. the encoding should be deterministic.
 *
 * @generated from message cosmos_proto.ScalarDescriptor
 */
export const ScalarDescriptor = proto3.makeMessageType(
  "cosmos_proto.ScalarDescriptor",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "field_type", kind: "enum", T: proto3.getEnumType(ScalarType), repeated: true },
  ],
);


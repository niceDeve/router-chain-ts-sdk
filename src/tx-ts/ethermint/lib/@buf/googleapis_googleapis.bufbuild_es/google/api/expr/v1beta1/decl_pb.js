// Copyright 2019 Google LLC.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

// @generated by protoc-gen-es v1.0.0
// @generated from file google/api/expr/v1beta1/decl.proto (package google.api.expr.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Expr } from "./expr_pb.js";

/**
 * A declaration.
 *
 * @generated from message google.api.expr.v1beta1.Decl
 */
export const Decl = proto3.makeMessageType(
  "google.api.expr.v1beta1.Decl",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "doc", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "ident", kind: "message", T: IdentDecl, oneof: "kind" },
    { no: 5, name: "function", kind: "message", T: FunctionDecl, oneof: "kind" },
  ],
);

/**
 * The declared type of a variable.
 *
 * Extends runtime type values with extra information used for type checking
 * and dispatching.
 *
 * @generated from message google.api.expr.v1beta1.DeclType
 */
export const DeclType = proto3.makeMessageType(
  "google.api.expr.v1beta1.DeclType",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "type_params", kind: "message", T: DeclType, repeated: true },
  ],
);

/**
 * An identifier declaration.
 *
 * @generated from message google.api.expr.v1beta1.IdentDecl
 */
export const IdentDecl = proto3.makeMessageType(
  "google.api.expr.v1beta1.IdentDecl",
  () => [
    { no: 3, name: "type", kind: "message", T: DeclType },
    { no: 4, name: "value", kind: "message", T: Expr },
  ],
);

/**
 * A function declaration.
 *
 * @generated from message google.api.expr.v1beta1.FunctionDecl
 */
export const FunctionDecl = proto3.makeMessageType(
  "google.api.expr.v1beta1.FunctionDecl",
  () => [
    { no: 1, name: "args", kind: "message", T: IdentDecl, repeated: true },
    { no: 2, name: "return_type", kind: "message", T: DeclType },
    { no: 3, name: "receiver_function", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);


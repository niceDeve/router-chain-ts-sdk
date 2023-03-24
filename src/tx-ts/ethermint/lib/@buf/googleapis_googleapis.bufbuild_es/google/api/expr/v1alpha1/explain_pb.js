// Copyright 2022 Google LLC
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

// @generated by protoc-gen-es v1.0.0
// @generated from file google/api/expr/v1alpha1/explain.proto (package google.api.expr.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Value } from "./value_pb.js";

/**
 * Values of intermediate expressions produced when evaluating expression.
 * Deprecated, use `EvalState` instead.
 *
 * @generated from message google.api.expr.v1alpha1.Explain
 * @deprecated
 */
export const Explain = proto3.makeMessageType(
  "google.api.expr.v1alpha1.Explain",
  () => [
    { no: 1, name: "values", kind: "message", T: Value, repeated: true },
    { no: 2, name: "expr_steps", kind: "message", T: Explain_ExprStep, repeated: true },
  ],
);

/**
 * ID and value index of one step.
 *
 * @generated from message google.api.expr.v1alpha1.Explain.ExprStep
 */
export const Explain_ExprStep = proto3.makeMessageType(
  "google.api.expr.v1alpha1.Explain.ExprStep",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "value_index", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
  {localName: "Explain_ExprStep"},
);


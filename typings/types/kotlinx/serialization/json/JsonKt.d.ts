import type { Object } from '../../../java/lang/Object.d.ts'
import type { Json } from '../../../kotlinx/serialization/json/Json.d.ts'
import type { JsonElement } from '../../../kotlinx/serialization/json/JsonElement.d.ts'
export class JsonKt extends Object {
    static Json(paramarg0: Json, paramarg1: (param0: Object | null) => void): Json;
    static decodeFromJsonElement(paramarg0: Json, paramarg1: JsonElement): Object | null;
    static encodeToJsonElement(paramarg0: Json, paramarg1: Object | null): JsonElement;
}
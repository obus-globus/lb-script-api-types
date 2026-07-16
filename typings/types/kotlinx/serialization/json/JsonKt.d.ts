import type { Object } from '../../../java/lang/Object.d.ts'
import type { Json } from '../../../kotlinx/serialization/json/Json.d.ts'
import type { JsonBuilder } from '../../../kotlinx/serialization/json/JsonBuilder.d.ts'
import type { JsonElement } from '../../../kotlinx/serialization/json/JsonElement.d.ts'
export class JsonKt extends Object {
    static Json(from: Json, builderAction: (param0: JsonBuilder) => void): Json;
    static decodeFromJsonElement<T extends unknown>(self: Json, json: JsonElement): T;
    static encodeToJsonElement<T extends unknown>(self: Json, value: T): JsonElement;
}
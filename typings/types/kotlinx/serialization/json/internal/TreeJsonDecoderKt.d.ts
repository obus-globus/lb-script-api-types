import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DeserializationStrategy } from '../../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { JsonElement } from '../../../../kotlinx/serialization/json/JsonElement.d.ts'
export class TreeJsonDecoderKt extends Object {
    static readJson(paramarg0: Json, paramarg1: JsonElement, paramarg2: DeserializationStrategy<Object>): Object | null;
    static readPolymorphicJson(paramarg0: Json, paramarg1: string, paramarg2: JsonObject, paramarg3: DeserializationStrategy<Object>): Object | null;
}
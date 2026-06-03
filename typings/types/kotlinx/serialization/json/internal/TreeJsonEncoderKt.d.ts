import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SerializationStrategy } from '../../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { JsonElement } from '../../../../kotlinx/serialization/json/JsonElement.d.ts'
export class TreeJsonEncoderKt extends Object {
    static PRIMITIVE_TAG: string;
    static cast(paramarg0: JsonElement, paramarg1: string, paramarg2: () => string): Object | null;
    static writeJson(paramarg0: Json, paramarg1: Object | null, paramarg2: SerializationStrategy<Object>): JsonElement;
}
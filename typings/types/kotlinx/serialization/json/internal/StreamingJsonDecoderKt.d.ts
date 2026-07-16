import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DeserializationStrategy } from '../../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { JsonElement } from '../../../../kotlinx/serialization/json/JsonElement.d.ts'
export class StreamingJsonDecoderKt extends Object {
    static decodeStringToJsonTree<T extends unknown>(json: Json, deserializer: DeserializationStrategy<T>, source: string): JsonElement;
}
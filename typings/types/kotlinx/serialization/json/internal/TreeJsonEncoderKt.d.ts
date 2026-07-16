import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SerializationStrategy } from '../../../../kotlinx/serialization/SerializationStrategy.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { JsonDecoder } from '../../../../kotlinx/serialization/json/JsonDecoder.d.ts'
import type { JsonElement } from '../../../../kotlinx/serialization/json/JsonElement.d.ts'
export class TreeJsonEncoderKt extends Object {
    static PRIMITIVE_TAG: string;
    static cast<T extends JsonElement>(self: JsonDecoder, value: JsonElement, serialName: string, path: () => string): T;
    static writeJson<T extends unknown>(json: Json, value: T, serializer: SerializationStrategy<T>): JsonElement;
}
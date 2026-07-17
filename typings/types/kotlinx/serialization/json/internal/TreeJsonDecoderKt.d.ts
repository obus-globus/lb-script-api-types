import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DeserializationStrategy } from '../../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { JsonElement } from '../../../../kotlinx/serialization/json/JsonElement.d.ts'
export class TreeJsonDecoderKt extends Object {
    static readJson<T extends unknown>(json: Json, element: JsonElement, deserializer: DeserializationStrategy<T>): T;
    static readPolymorphicJson<T extends unknown>(self: Json, discriminator: string, element: JavaMap<any, any>, deserializer: DeserializationStrategy<T>): T;
}
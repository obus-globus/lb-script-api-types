import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
import type { JsonElement } from '../../../kotlinx/serialization/json/JsonElement.d.ts'
export class JsonElementSerializer extends Object implements KSerializer<JsonElement> {
    static INSTANCE: JsonElementSerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): JsonElement;
    serialize(encoder: Encoder, value: JsonElement): void;
}
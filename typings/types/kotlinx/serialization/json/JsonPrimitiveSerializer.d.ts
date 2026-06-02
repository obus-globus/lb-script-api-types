import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
import type { JsonPrimitive } from '../../../kotlinx/serialization/json/JsonPrimitive.d.ts'
export class JsonPrimitiveSerializer extends Object implements KSerializer<JsonPrimitive> {
    static INSTANCE: JsonPrimitiveSerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): JsonPrimitive;
    serialize(encoder: Encoder, value: JsonPrimitive): void;
}
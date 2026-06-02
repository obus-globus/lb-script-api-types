import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
import type { JsonNull } from '../../../kotlinx/serialization/json/JsonNull.d.ts'
export class JsonNullSerializer extends Object implements KSerializer<JsonNull> {
    static INSTANCE: JsonNullSerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): JsonNull;
    serialize(encoder: Encoder, value: JsonNull): void;
}
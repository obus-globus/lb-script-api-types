import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
import type { JsonLiteral } from '../../../kotlinx/serialization/json/JsonLiteral.d.ts'
export class JsonLiteralSerializer extends Object implements KSerializer<JsonLiteral> {
    static INSTANCE: JsonLiteralSerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): JsonLiteral;
    serialize(encoder: Encoder, value: JsonLiteral): void;
}
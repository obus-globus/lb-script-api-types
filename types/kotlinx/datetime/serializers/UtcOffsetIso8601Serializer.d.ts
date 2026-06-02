import type { Object } from '../../../java/lang/Object.d.ts'
import type { UtcOffset } from '../../../kotlinx/datetime/UtcOffset.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class UtcOffsetIso8601Serializer extends Object implements KSerializer<UtcOffset> {
    static INSTANCE: UtcOffsetIso8601Serializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): UtcOffset;
    serialize(encoder: Encoder, value: UtcOffset): void;
}
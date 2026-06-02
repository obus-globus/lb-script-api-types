import type { Object } from '../../../java/lang/Object.d.ts'
import type { ULong } from '../../../kotlin/ULong.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class ULongSerializer extends Object implements KSerializer<ULong> {
    static INSTANCE: ULongSerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): ULong;
    serialize(encoder: Encoder, value: ULong): void;
}
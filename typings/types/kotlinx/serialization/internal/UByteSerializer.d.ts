import type { Object } from '../../../java/lang/Object.d.ts'
import type { UByte } from '../../../kotlin/UByte.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class UByteSerializer extends Object implements KSerializer<UByte> {
    static INSTANCE: UByteSerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): UByte;
    serialize(encoder: Encoder, value: UByte): void;
}
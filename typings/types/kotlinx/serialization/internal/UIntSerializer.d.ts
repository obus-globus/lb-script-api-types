import type { Object } from '../../../java/lang/Object.d.ts'
import type { UInt } from '../../../kotlin/UInt.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class UIntSerializer extends Object implements KSerializer<UInt> {
    static INSTANCE: UIntSerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): UInt;
    serialize(encoder: Encoder, value: UInt): void;
}
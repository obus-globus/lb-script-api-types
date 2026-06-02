import type { Object } from '../../../java/lang/Object.d.ts'
import type { UShort } from '../../../kotlin/UShort.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class UShortSerializer extends Object implements KSerializer<UShort> {
    static INSTANCE: UShortSerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): UShort;
    serialize(encoder: Encoder, value: UShort): void;
}
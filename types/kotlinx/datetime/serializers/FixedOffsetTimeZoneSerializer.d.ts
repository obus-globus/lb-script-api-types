import type { Object } from '../../../java/lang/Object.d.ts'
import type { FixedOffsetTimeZone } from '../../../kotlinx/datetime/FixedOffsetTimeZone.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class FixedOffsetTimeZoneSerializer extends Object implements KSerializer<FixedOffsetTimeZone> {
    static INSTANCE: FixedOffsetTimeZoneSerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): FixedOffsetTimeZone;
    serialize(encoder: Encoder, value: FixedOffsetTimeZone): void;
}
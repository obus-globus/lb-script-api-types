import type { Object } from '../../../java/lang/Object.d.ts'
import type { TimeZone } from '../../../kotlinx/datetime/TimeZone.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class TimeZoneSerializer extends Object implements KSerializer<TimeZone> {
    static INSTANCE: TimeZoneSerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): TimeZone;
    serialize(encoder: Encoder, value: TimeZone): void;
}
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DateTimeUnit$TimeBased } from '../../../kotlinx/datetime/DateTimeUnit$TimeBased.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class TimeBasedDateTimeUnitSerializer extends Object implements KSerializer<DateTimeUnit$TimeBased> {
    static INSTANCE: TimeBasedDateTimeUnitSerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): DateTimeUnit$TimeBased;
    serialize(encoder: Encoder, value: DateTimeUnit$TimeBased): void;
}
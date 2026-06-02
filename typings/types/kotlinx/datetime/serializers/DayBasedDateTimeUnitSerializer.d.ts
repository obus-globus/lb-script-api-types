import type { Object } from '../../../java/lang/Object.d.ts'
import type { DateTimeUnit$DayBased } from '../../../kotlinx/datetime/DateTimeUnit$DayBased.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class DayBasedDateTimeUnitSerializer extends Object implements KSerializer<DateTimeUnit$DayBased> {
    static INSTANCE: DayBasedDateTimeUnitSerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): DateTimeUnit$DayBased;
    serialize(encoder: Encoder, value: DateTimeUnit$DayBased): void;
}
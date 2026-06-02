import type { Object } from '../../../java/lang/Object.d.ts'
import type { DateTimeUnit$MonthBased } from '../../../kotlinx/datetime/DateTimeUnit$MonthBased.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class MonthBasedDateTimeUnitSerializer extends Object implements KSerializer<DateTimeUnit$MonthBased> {
    static INSTANCE: MonthBasedDateTimeUnitSerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): DateTimeUnit$MonthBased;
    serialize(encoder: Encoder, value: DateTimeUnit$MonthBased): void;
}
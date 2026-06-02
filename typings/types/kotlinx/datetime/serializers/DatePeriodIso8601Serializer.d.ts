import type { Object } from '../../../java/lang/Object.d.ts'
import type { DatePeriod } from '../../../kotlinx/datetime/DatePeriod.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class DatePeriodIso8601Serializer extends Object implements KSerializer<DatePeriod> {
    static INSTANCE: DatePeriodIso8601Serializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): DatePeriod;
    serialize(encoder: Encoder, value: DatePeriod): void;
}
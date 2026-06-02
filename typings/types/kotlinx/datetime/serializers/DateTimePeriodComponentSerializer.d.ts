import type { Object } from '../../../java/lang/Object.d.ts'
import type { DateTimePeriod } from '../../../kotlinx/datetime/DateTimePeriod.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class DateTimePeriodComponentSerializer extends Object implements KSerializer<DateTimePeriod> {
    static INSTANCE: DateTimePeriodComponentSerializer;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): DateTimePeriod;
    serialize(encoder: Encoder, value: DateTimePeriod): void;
}
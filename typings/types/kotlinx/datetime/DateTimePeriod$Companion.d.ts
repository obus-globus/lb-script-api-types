import type { Object } from '../../java/lang/Object.d.ts'
import type { DateTimePeriod } from '../../kotlinx/datetime/DateTimePeriod.d.ts'
import type { KSerializer } from '../../kotlinx/serialization/KSerializer.d.ts'
export class DateTimePeriod$Companion extends Object {
    parse(text: string): DateTimePeriod;
    serializer(): KSerializer<DateTimePeriod>;
}
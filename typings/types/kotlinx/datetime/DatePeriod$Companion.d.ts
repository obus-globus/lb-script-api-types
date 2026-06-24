import type { Object } from '../../java/lang/Object.d.ts'
import type { DatePeriod } from '../../kotlinx/datetime/DatePeriod.d.ts'
import type { KSerializer } from '../../kotlinx/serialization/KSerializer.d.ts'
export class DatePeriod$Companion extends Object {
    parse(text: string): DatePeriod;
    parseOrNull(text: string): DatePeriod | null;
    serializer(): KSerializer<DatePeriod>;
}
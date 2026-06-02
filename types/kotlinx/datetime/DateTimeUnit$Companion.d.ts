import type { Object } from '../../java/lang/Object.d.ts'
import type { DateTimeUnit } from '../../kotlinx/datetime/DateTimeUnit.d.ts'
import type { DateTimeUnit$DayBased } from '../../kotlinx/datetime/DateTimeUnit$DayBased.d.ts'
import type { DateTimeUnit$MonthBased } from '../../kotlinx/datetime/DateTimeUnit$MonthBased.d.ts'
import type { DateTimeUnit$TimeBased } from '../../kotlinx/datetime/DateTimeUnit$TimeBased.d.ts'
import type { KSerializer } from '../../kotlinx/serialization/KSerializer.d.ts'
export class DateTimeUnit$Companion extends Object {
    readonly CENTURY: DateTimeUnit$MonthBased;
    readonly DAY: DateTimeUnit$DayBased;
    readonly HOUR: DateTimeUnit$TimeBased;
    readonly MICROSECOND: DateTimeUnit$TimeBased;
    readonly MILLISECOND: DateTimeUnit$TimeBased;
    readonly MINUTE: DateTimeUnit$TimeBased;
    readonly MONTH: DateTimeUnit$MonthBased;
    readonly NANOSECOND: DateTimeUnit$TimeBased;
    readonly QUARTER: DateTimeUnit$MonthBased;
    readonly SECOND: DateTimeUnit$TimeBased;
    readonly WEEK: DateTimeUnit$DayBased;
    readonly YEAR: DateTimeUnit$MonthBased;
    serializer(): KSerializer<DateTimeUnit>;
}
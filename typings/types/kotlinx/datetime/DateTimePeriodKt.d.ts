import type { Object } from '../../java/lang/Object.d.ts'
import type { Duration } from '../../kotlin/time/Duration.d.ts'
import type { DatePeriod } from '../../kotlinx/datetime/DatePeriod.d.ts'
import type { DateTimePeriod } from '../../kotlinx/datetime/DateTimePeriod.d.ts'
export class DateTimePeriodKt extends Object {
    static DateTimePeriod(years: number, months: number, days: number, hours: number, minutes: number, seconds: number, nanoseconds: number): DateTimePeriod;
    static buildDateTimePeriod(totalMonths: number, days: number, totalNanoseconds: number): DateTimePeriod;
    static plus(self: DatePeriod, other: DatePeriod): DatePeriod;
    static plus(self: DateTimePeriod, other: DateTimePeriod): DateTimePeriod;
    static toDatePeriod(self: string): DatePeriod;
    static toDateTimePeriod(self: string): DateTimePeriod;
// (invalid TS: name contains '-')     static toDateTimePeriod-LRDsOJo(self: Duration): DateTimePeriod;
}
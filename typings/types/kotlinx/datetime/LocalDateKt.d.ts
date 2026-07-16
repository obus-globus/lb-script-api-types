import type { Object } from '../../java/lang/Object.d.ts'
import type { DatePeriod } from '../../kotlinx/datetime/DatePeriod.d.ts'
import type { DateTimeUnit$DateBased } from '../../kotlinx/datetime/DateTimeUnit$DateBased.d.ts'
import type { DayOfWeek } from '../../kotlinx/datetime/DayOfWeek.d.ts'
import type { LocalDate } from '../../kotlinx/datetime/LocalDate.d.ts'
import type { LocalDateTime } from '../../kotlinx/datetime/LocalDateTime.d.ts'
import type { LocalTime } from '../../kotlinx/datetime/LocalTime.d.ts'
import type { Month } from '../../kotlinx/datetime/Month.d.ts'
import type { DateTimeFormat } from '../../kotlinx/datetime/format/DateTimeFormat.d.ts'
export class LocalDateKt extends Object {
    static YEAR_MAX: number;
    static YEAR_MIN: number;
    static LocalDate(year: number, monthNumber: number, dayOfMonth: number): LocalDate;
    static LocalDate(year: number, month: Month, dayOfMonth: number): LocalDate;
    static atTime(self: LocalDate, hour: number, minute: number, second: number, nanosecond: number): LocalDateTime;
    static atTime(self: LocalDate, time: LocalTime): LocalDateTime;
    static format(self: LocalDate, format: DateTimeFormat<LocalDate>): string;
    static getIsoDateFormat(): DateTimeFormat<LocalDate>;
    static minus(self: LocalDate, other: LocalDate): DatePeriod;
    static minus(self: LocalDate, value: number, unit: DateTimeUnit$DateBased): LocalDate;
    static minus(self: LocalDate, period: DatePeriod): LocalDate;
    static minus(self: LocalDate, unit: DateTimeUnit$DateBased): LocalDate;
    static next(self: LocalDate, dayOfWeek: DayOfWeek): LocalDate;
    static nextOrSame(self: LocalDate, dayOfWeek: DayOfWeek): LocalDate;
    static plus(self: LocalDate, value: number, unit: DateTimeUnit$DateBased): LocalDate;
    static previous(self: LocalDate, dayOfWeek: DayOfWeek): LocalDate;
    static previousOrSame(self: LocalDate, dayOfWeek: DayOfWeek): LocalDate;
    static toLocalDate(self: string): LocalDate;
}
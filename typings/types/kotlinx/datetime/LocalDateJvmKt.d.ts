import type { Month } from '../../java/time/Month.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { DatePeriod } from '../../kotlinx/datetime/DatePeriod.d.ts'
import type { DateTimeUnit$DateBased } from '../../kotlinx/datetime/DateTimeUnit$DateBased.d.ts'
import type { LocalDate } from '../../kotlinx/datetime/LocalDate.d.ts'
import type { LocalDate$Companion } from '../../kotlinx/datetime/LocalDate$Companion.d.ts'
import type { DateTimeFormat } from '../../kotlinx/datetime/format/DateTimeFormat.d.ts'
export class LocalDateJvmKt extends Object {
    static LocalDate(year: number, month: Month, dayOfMonth: number): LocalDate;
    static daysUntil(self: LocalDate, other: LocalDate): number;
    static minus(self: LocalDate, value: number, unit: DateTimeUnit$DateBased): LocalDate;
    static monthsUntil(self: LocalDate, other: LocalDate): number;
    static parseOrNull(self: LocalDate$Companion, input: CharSequence, format: DateTimeFormat<LocalDate>): LocalDate | null;
    static periodUntil(self: LocalDate, other: LocalDate): DatePeriod;
    static plus(self: LocalDate, value: number, unit: DateTimeUnit$DateBased): LocalDate;
    static plus(self: LocalDate, period: DatePeriod): LocalDate;
    static plus(self: LocalDate, unit: DateTimeUnit$DateBased): LocalDate;
    static until(self: LocalDate, other: LocalDate, unit: DateTimeUnit$DateBased): number;
    static yearsUntil(self: LocalDate, other: LocalDate): number;
}
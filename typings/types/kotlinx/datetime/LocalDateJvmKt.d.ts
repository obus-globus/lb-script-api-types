import type { Month } from '../../java/time/Month.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
import type { DatePeriod } from '../../kotlinx/datetime/DatePeriod.d.ts'
import type { DateTimeUnit$DateBased } from '../../kotlinx/datetime/DateTimeUnit$DateBased.d.ts'
import type { LocalDate } from '../../kotlinx/datetime/LocalDate.d.ts'
import type { LocalDate$Companion } from '../../kotlinx/datetime/LocalDate$Companion.d.ts'
import type { DateTimeFormat } from '../../kotlinx/datetime/format/DateTimeFormat.d.ts'
export class LocalDateJvmKt extends Object {
    static LocalDate(paramarg0: number, paramarg1: Month, paramarg2: number): LocalDate;
    static daysUntil(paramarg0: LocalDate, paramarg1: LocalDate): number;
    static minus(paramarg0: LocalDate, paramarg1: number, paramarg2: DateTimeUnit$DateBased): LocalDate;
    static monthsUntil(paramarg0: LocalDate, paramarg1: LocalDate): number;
    static parseOrNull(paramarg0: LocalDate$Companion, paramarg1: CharSequence, paramarg2: DateTimeFormat<LocalDate>): LocalDate;
    static periodUntil(paramarg0: LocalDate, paramarg1: LocalDate): DatePeriod;
    static plus(paramarg0: LocalDate, paramarg1: number, paramarg2: DateTimeUnit$DateBased): LocalDate;
    static plus(paramarg0: LocalDate, paramarg1: DatePeriod): LocalDate;
    static plus(paramarg0: LocalDate, paramarg1: DateTimeUnit$DateBased): LocalDate;
    static until(paramarg0: LocalDate, paramarg1: LocalDate, paramarg2: DateTimeUnit$DateBased): number;
    static yearsUntil(paramarg0: LocalDate, paramarg1: LocalDate): number;
}
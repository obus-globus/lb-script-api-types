import type { Object } from '../../java/lang/Object.d.ts'
import type { DatePeriod } from '../../kotlinx/datetime/DatePeriod.d.ts'
import type { DateTimeUnit$DateBased } from '../../kotlinx/datetime/DateTimeUnit$DateBased.d.ts'
import type { LocalDate } from '../../kotlinx/datetime/LocalDate.d.ts'
import type { LocalDateTime } from '../../kotlinx/datetime/LocalDateTime.d.ts'
import type { LocalTime } from '../../kotlinx/datetime/LocalTime.d.ts'
import type { Month } from '../../kotlinx/datetime/Month.d.ts'
import type { DateTimeFormat } from '../../kotlinx/datetime/format/DateTimeFormat.d.ts'
export class LocalDateKt extends Object {
    static LocalDate(paramarg0: number, paramarg1: number, paramarg2: number): LocalDate;
    static LocalDate(paramarg0: number, paramarg1: Month, paramarg2: number): LocalDate;
    static atTime(paramarg0: LocalDate, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): LocalDateTime;
    static atTime(paramarg0: LocalDate, paramarg1: LocalTime): LocalDateTime;
    static format(paramarg0: LocalDate, paramarg1: DateTimeFormat<LocalDate>): string;
    static getIsoDateFormat(): DateTimeFormat<LocalDate>;
    static minus(paramarg0: LocalDate, paramarg1: LocalDate): DatePeriod;
    static minus(paramarg0: LocalDate, paramarg1: number, paramarg2: DateTimeUnit$DateBased): LocalDate;
    static minus(paramarg0: LocalDate, paramarg1: DatePeriod): LocalDate;
    static minus(paramarg0: LocalDate, paramarg1: DateTimeUnit$DateBased): LocalDate;
    static minus(paramarg0: LocalDate, paramarg1: number, paramarg2: DateTimeUnit$DateBased): LocalDate;
    static plus(paramarg0: LocalDate, paramarg1: number, paramarg2: DateTimeUnit$DateBased): LocalDate;
    static toLocalDate(paramarg0: string): LocalDate;
}
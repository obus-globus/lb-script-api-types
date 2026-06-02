import type { Object } from '../../java/lang/Object.d.ts'
import type { DateTimeUnit$MonthBased } from '../../kotlinx/datetime/DateTimeUnit$MonthBased.d.ts'
import type { LocalDate } from '../../kotlinx/datetime/LocalDate.d.ts'
import type { YearMonth } from '../../kotlinx/datetime/YearMonth.d.ts'
import type { YearMonth$Companion } from '../../kotlinx/datetime/YearMonth$Companion.d.ts'
import type { DateTimeFormat } from '../../kotlinx/datetime/format/DateTimeFormat.d.ts'
export class YearMonthKt extends Object {
    static format(paramarg0: YearMonth, paramarg1: DateTimeFormat<YearMonth>): string;
    static fromProlepticMonth(paramarg0: YearMonth$Companion, paramarg1: number): YearMonth;
    static getMAX(paramarg0: YearMonth$Companion): YearMonth;
    static getMIN(paramarg0: YearMonth$Companion): YearMonth;
    static getProlepticMonth(paramarg0: YearMonth): number;
    static getYearMonth(paramarg0: LocalDate): YearMonth;
    static minus(paramarg0: YearMonth, paramarg1: number, paramarg2: DateTimeUnit$MonthBased): YearMonth;
    static minus(paramarg0: YearMonth, paramarg1: number, paramarg2: DateTimeUnit$MonthBased): YearMonth;
    static minusMonth(paramarg0: YearMonth): YearMonth;
    static minusYear(paramarg0: YearMonth): YearMonth;
    static monthsUntil(paramarg0: YearMonth, paramarg1: YearMonth): number;
    static onDay(paramarg0: YearMonth, paramarg1: number): LocalDate;
    static plus(paramarg0: YearMonth, paramarg1: number, paramarg2: DateTimeUnit$MonthBased): YearMonth;
    static plus(paramarg0: YearMonth, paramarg1: number, paramarg2: DateTimeUnit$MonthBased): YearMonth;
    static plusMonth(paramarg0: YearMonth): YearMonth;
    static plusYear(paramarg0: YearMonth): YearMonth;
    static until(paramarg0: YearMonth, paramarg1: YearMonth, paramarg2: DateTimeUnit$MonthBased): number;
    static yearsUntil(paramarg0: YearMonth, paramarg1: YearMonth): number;
}
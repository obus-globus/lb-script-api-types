import type { Object } from '../../java/lang/Object.d.ts'
import type { DateTimeUnit$MonthBased } from '../../kotlinx/datetime/DateTimeUnit$MonthBased.d.ts'
import type { LocalDate } from '../../kotlinx/datetime/LocalDate.d.ts'
import type { YearMonth } from '../../kotlinx/datetime/YearMonth.d.ts'
import type { YearMonth$Companion } from '../../kotlinx/datetime/YearMonth$Companion.d.ts'
import type { DateTimeFormat } from '../../kotlinx/datetime/format/DateTimeFormat.d.ts'
export class YearMonthKt extends Object {
    static format(self: YearMonth, format: DateTimeFormat<YearMonth>): string;
    static fromProlepticMonth(self: YearMonth$Companion, prolepticMonth: number): YearMonth;
    static getMAX(paramarg0: YearMonth$Companion): YearMonth;
    static getMIN(paramarg0: YearMonth$Companion): YearMonth;
    static getProlepticMonth(paramarg0: YearMonth): number;
    static getYearMonth(paramarg0: LocalDate): YearMonth;
    static minus(self: YearMonth, value: number, unit: DateTimeUnit$MonthBased): YearMonth;
    static minusMonth(self: YearMonth): YearMonth;
    static minusYear(self: YearMonth): YearMonth;
    static monthsUntil(self: YearMonth, other: YearMonth): number;
    static onDay(self: YearMonth, day: number): LocalDate;
    static plus(self: YearMonth, value: number, unit: DateTimeUnit$MonthBased): YearMonth;
    static plusMonth(self: YearMonth): YearMonth;
    static plusYear(self: YearMonth): YearMonth;
    static until(self: YearMonth, other: YearMonth, unit: DateTimeUnit$MonthBased): number;
    static yearsUntil(self: YearMonth, other: YearMonth): number;
}
import type { Object } from '../../../java/lang/Object.d.ts'
import type { YearMonth } from '../../../kotlinx/datetime/YearMonth.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormatBuilder } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder.d.ts'
import type { MonthNames } from '../../../kotlinx/datetime/format/MonthNames.d.ts'
import type { Padding } from '../../../kotlinx/datetime/format/Padding.d.ts'
export interface DateTimeFormatBuilder$WithYearMonth extends Object, DateTimeFormatBuilder{
    monthName(names: MonthNames): void;
    monthNumber(padding: Padding): void;
    year(padding: Padding): void;
    yearMonth(format: DateTimeFormat<YearMonth>): void;
    yearTwoDigits(baseYear: number): void;
}
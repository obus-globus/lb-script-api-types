import type { Object } from '../../../java/lang/Object.d.ts'
import type { YearMonth } from '../../../kotlinx/datetime/YearMonth.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormatBuilder$WithYearMonth } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder$WithYearMonth.d.ts'
import type { MonthNames } from '../../../kotlinx/datetime/format/MonthNames.d.ts'
import type { Padding } from '../../../kotlinx/datetime/format/Padding.d.ts'
import type { YearMonthFieldContainer } from '../../../kotlinx/datetime/format/YearMonthFieldContainer.d.ts'
import type { FormatStructure } from '../../../kotlinx/datetime/internal/format/FormatStructure.d.ts'
export interface AbstractWithYearMonthBuilder extends Object, DateTimeFormatBuilder$WithYearMonth{
    addFormatStructureForYearMonth(structure: FormatStructure<YearMonthFieldContainer>): void;
    chars(value: string): void;
    monthName(names: MonthNames): void;
    monthNumber(padding: Padding): void;
    year(padding: Padding): void;
    yearMonth(format: DateTimeFormat<YearMonth>): void;
    yearTwoDigits(baseYear: number): void;
}
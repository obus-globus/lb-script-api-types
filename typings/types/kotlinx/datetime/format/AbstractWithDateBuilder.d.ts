import type { Object } from '../../../java/lang/Object.d.ts'
import type { LocalDate } from '../../../kotlinx/datetime/LocalDate.d.ts'
import type { YearMonth } from '../../../kotlinx/datetime/YearMonth.d.ts'
import type { AbstractWithYearMonthBuilder } from '../../../kotlinx/datetime/format/AbstractWithYearMonthBuilder.d.ts'
import type { DateFieldContainer } from '../../../kotlinx/datetime/format/DateFieldContainer.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormatBuilder$WithDate } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder$WithDate.d.ts'
import type { DayOfWeekNames } from '../../../kotlinx/datetime/format/DayOfWeekNames.d.ts'
import type { MonthNames } from '../../../kotlinx/datetime/format/MonthNames.d.ts'
import type { Padding } from '../../../kotlinx/datetime/format/Padding.d.ts'
import type { YearMonthFieldContainer } from '../../../kotlinx/datetime/format/YearMonthFieldContainer.d.ts'
import type { FormatStructure } from '../../../kotlinx/datetime/internal/format/FormatStructure.d.ts'
export interface AbstractWithDateBuilder extends Object, AbstractWithYearMonthBuilder, DateTimeFormatBuilder$WithDate{
    addFormatStructureForDate(structure: FormatStructure<DateFieldContainer>): void;
    addFormatStructureForYearMonth(structure: FormatStructure<YearMonthFieldContainer>): void;
    chars(value: string): void;
    date(format: DateTimeFormat<LocalDate>): void;
    day(padding: Padding): void;
    dayOfMonth(padding: Padding): void;
    dayOfWeek(names: DayOfWeekNames): void;
    dayOfYear(padding: Padding): void;
    monthName(names: MonthNames): void;
    monthNumber(padding: Padding): void;
    year(padding: Padding): void;
    yearMonth(format: DateTimeFormat<YearMonth>): void;
    yearTwoDigits(baseYear: number): void;
}
import type { Object } from '../../../java/lang/Object.d.ts'
import type { LocalDate } from '../../../kotlinx/datetime/LocalDate.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormatBuilder$WithYearMonth } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder$WithYearMonth.d.ts'
import type { DayOfWeekNames } from '../../../kotlinx/datetime/format/DayOfWeekNames.d.ts'
import type { Padding } from '../../../kotlinx/datetime/format/Padding.d.ts'
export interface DateTimeFormatBuilder$WithDate extends Object, DateTimeFormatBuilder$WithYearMonth{
    date(format: DateTimeFormat<LocalDate>): void;
    day(padding: Padding): void;
    dayOfMonth(padding: Padding): void;
    dayOfWeek(names: DayOfWeekNames): void;
    dayOfYear(padding: Padding): void;
}
import type { Object } from '../../../java/lang/Object.d.ts'
import type { LocalDateTime } from '../../../kotlinx/datetime/LocalDateTime.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormatBuilder$WithDate } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder$WithDate.d.ts'
import type { DateTimeFormatBuilder$WithTime } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder$WithTime.d.ts'
import type { DayOfWeekNames } from '../../../kotlinx/datetime/format/DayOfWeekNames.d.ts'
import type { MonthNames } from '../../../kotlinx/datetime/format/MonthNames.d.ts'
import type { Padding } from '../../../kotlinx/datetime/format/Padding.d.ts'
export interface DateTimeFormatBuilder$WithDateTime extends Object, DateTimeFormatBuilder$WithDate, DateTimeFormatBuilder$WithTime{
    amPmHour(padding: Padding): void;
    amPmMarker(am: string, pm: string): void;
    chars(value: string): void;
    dateTime(format: DateTimeFormat<LocalDateTime>): void;
    day(padding: Padding): void;
    dayOfMonth(padding: Padding): void;
    dayOfWeek(names: DayOfWeekNames): void;
    dayOfYear(padding: Padding): void;
    hour(padding: Padding): void;
    minute(padding: Padding): void;
    monthName(names: MonthNames): void;
    monthNumber(padding: Padding): void;
    second(padding: Padding): void;
    secondFraction(fixedLength: number): void;
    secondFraction(minLength: number, maxLength: number): void;
    year(padding: Padding): void;
    yearTwoDigits(baseYear: number): void;
}
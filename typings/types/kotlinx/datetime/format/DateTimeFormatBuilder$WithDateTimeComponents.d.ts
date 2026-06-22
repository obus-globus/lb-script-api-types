import type { Object } from '../../../java/lang/Object.d.ts'
import type { DateTimeComponents } from '../../../kotlinx/datetime/format/DateTimeComponents.d.ts'
import type { DateTimeFormat } from '../../../kotlinx/datetime/format/DateTimeFormat.d.ts'
import type { DateTimeFormatBuilder$WithDateTime } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder$WithDateTime.d.ts'
import type { DateTimeFormatBuilder$WithUtcOffset } from '../../../kotlinx/datetime/format/DateTimeFormatBuilder$WithUtcOffset.d.ts'
import type { DayOfWeekNames } from '../../../kotlinx/datetime/format/DayOfWeekNames.d.ts'
import type { MonthNames } from '../../../kotlinx/datetime/format/MonthNames.d.ts'
import type { Padding } from '../../../kotlinx/datetime/format/Padding.d.ts'
export interface DateTimeFormatBuilder$WithDateTimeComponents extends Object, DateTimeFormatBuilder$WithDateTime, DateTimeFormatBuilder$WithUtcOffset{
    amPmHour(padding: Padding): void;
    amPmMarker(am: string, pm: string): void;
    chars(value: string): void;
    dateTimeComponents(format: DateTimeFormat<DateTimeComponents>): void;
    day(padding: Padding): void;
    dayOfWeek(names: DayOfWeekNames): void;
    dayOfYear(padding: Padding): void;
    hour(padding: Padding): void;
    minute(padding: Padding): void;
    monthName(names: MonthNames): void;
    monthNumber(padding: Padding): void;
    offsetHours(padding: Padding): void;
    offsetMinutesOfHour(padding: Padding): void;
    offsetSecondsOfMinute(padding: Padding): void;
    second(padding: Padding): void;
    secondFraction(minLength: number, maxLength: number): void;
    timeZoneId(): void;
    year(padding: Padding): void;
    yearTwoDigits(baseYear: number): void;
}
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Instant } from '../../../kotlin/time/Instant.d.ts'
import type { DayOfWeek } from '../../../kotlinx/datetime/DayOfWeek.d.ts'
import type { LocalDate } from '../../../kotlinx/datetime/LocalDate.d.ts'
import type { LocalDateTime } from '../../../kotlinx/datetime/LocalDateTime.d.ts'
import type { LocalTime } from '../../../kotlinx/datetime/LocalTime.d.ts'
import type { Month } from '../../../kotlinx/datetime/Month.d.ts'
import type { OverloadMarker } from '../../../kotlinx/datetime/OverloadMarker.d.ts'
import type { UtcOffset } from '../../../kotlinx/datetime/UtcOffset.d.ts'
import type { YearMonth } from '../../../kotlinx/datetime/YearMonth.d.ts'
import type { AmPmMarker } from '../../../kotlinx/datetime/format/AmPmMarker.d.ts'
import type { DateTimeComponents$Companion } from '../../../kotlinx/datetime/format/DateTimeComponents$Companion.d.ts'
import type { DateTimeComponentsContents } from '../../../kotlinx/datetime/format/DateTimeComponentsContents.d.ts'
export class DateTimeComponents extends Object {
    static Companion: DateTimeComponents$Companion;
    constructor(contents?: DateTimeComponentsContents)
    amPm: AmPmMarker | null;
    // private contents: DateTimeComponentsContents;
    /*not mapped: */ getContents$kotlinx_datetime(): DateTimeComponentsContents;
    day: number | null;
    dayOfMonth: number | null;
    dayOfWeek: DayOfWeek | null;
    dayOfYear: number | null;
    hour: number | null;
    hourOfAmPm: number | null;
    minute: number | null;
    month: Month | null;
    monthNumber: number | null;
    nanosecond: number | null;
    offsetHours: number | null;
    offsetIsNegative: boolean | null;
    offsetMinutesOfHour: number | null;
    offsetSecondsOfMinute: number | null;
    second: number | null;
    timeZoneId: string | null;
    year: number | null;
    setDate(localDate: LocalDate): void;
    setDateTime(localDateTime: LocalDateTime): void;
    setDateTimeOffset(instant: Instant, utcOffset: UtcOffset): void;
    setDateTimeOffset(localDateTime: LocalDateTime, utcOffset: UtcOffset): void;
    setOffset(utcOffset: UtcOffset): void;
    setTime(localTime: LocalTime): void;
    setYearMonth(yearMonth: YearMonth): void;
    toInstantUsingOffset(youShallNotPass: OverloadMarker): Instant;
    toLocalDate(): LocalDate;
    toLocalDateTime(): LocalDateTime;
    toLocalTime(): LocalTime;
    toUtcOffset(): UtcOffset;
    toYearMonth(): YearMonth;
}
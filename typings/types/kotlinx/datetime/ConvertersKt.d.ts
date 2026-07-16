import type { DayOfWeek } from '../../java/time/DayOfWeek.d.ts'
import type { LocalDate } from '../../java/time/LocalDate.d.ts'
import type { LocalDateTime } from '../../java/time/LocalDateTime.d.ts'
import type { LocalTime } from '../../java/time/LocalTime.d.ts'
import type { Month } from '../../java/time/Month.d.ts'
import type { Period } from '../../java/time/Period.d.ts'
import type { YearMonth } from '../../java/time/YearMonth.d.ts'
import type { ZoneId } from '../../java/time/ZoneId.d.ts'
import type { ZoneOffset } from '../../java/time/ZoneOffset.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { DatePeriod } from '../../kotlinx/datetime/DatePeriod.d.ts'
import type { DayOfWeek as DayOfWeek_2 } from '../../kotlinx/datetime/DayOfWeek.d.ts'
import type { FixedOffsetTimeZone } from '../../kotlinx/datetime/FixedOffsetTimeZone.d.ts'
import type { LocalDate as LocalDate_2 } from '../../kotlinx/datetime/LocalDate.d.ts'
import type { LocalDateTime as LocalDateTime_2 } from '../../kotlinx/datetime/LocalDateTime.d.ts'
import type { LocalIsoWeekDate } from '../../kotlinx/datetime/LocalIsoWeekDate.d.ts'
import type { LocalTime as LocalTime_2 } from '../../kotlinx/datetime/LocalTime.d.ts'
import type { Month as Month_2 } from '../../kotlinx/datetime/Month.d.ts'
import type { TimeZone } from '../../kotlinx/datetime/TimeZone.d.ts'
import type { UtcOffset } from '../../kotlinx/datetime/UtcOffset.d.ts'
import type { YearMonth as YearMonth_2 } from '../../kotlinx/datetime/YearMonth.d.ts'
export class ConvertersKt extends Object {
    static toJavaDayOfWeek(self: DayOfWeek_2): DayOfWeek;
    static toJavaLocalDate(self: LocalDate_2): LocalDate;
    static toJavaLocalDate(self: LocalIsoWeekDate): LocalDate;
    static toJavaLocalDateTime(self: LocalDateTime_2): LocalDateTime;
    static toJavaLocalTime(self: LocalTime_2): LocalTime;
    static toJavaMonth(self: Month_2): Month;
    static toJavaPeriod(self: DatePeriod): Period;
    static toJavaYearMonth(self: YearMonth_2): YearMonth;
    static toJavaZoneId(self: TimeZone): ZoneId;
    static toJavaZoneOffset(self: FixedOffsetTimeZone): ZoneOffset;
    static toJavaZoneOffset(self: UtcOffset): ZoneOffset;
    static toKotlinDatePeriod(self: Period): DatePeriod;
    static toKotlinDayOfWeek(self: DayOfWeek): DayOfWeek_2;
    static toKotlinFixedOffsetTimeZone(self: ZoneOffset): FixedOffsetTimeZone;
    static toKotlinLocalDate(self: LocalDate): LocalDate_2;
    static toKotlinLocalDateTime(self: LocalDateTime): LocalDateTime_2;
    static toKotlinLocalIsoWeekDate(self: LocalDate): LocalIsoWeekDate;
    static toKotlinLocalTime(self: LocalTime): LocalTime_2;
    static toKotlinMonth(self: Month): Month_2;
    static toKotlinTimeZone(self: ZoneId): TimeZone;
    static toKotlinUtcOffset(self: ZoneOffset): UtcOffset;
    static toKotlinYearMonth(self: YearMonth): YearMonth_2;
    static toKotlinZoneOffset(self: ZoneOffset): FixedOffsetTimeZone;
}
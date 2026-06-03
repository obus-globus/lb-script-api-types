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
import type { LocalTime as LocalTime_2 } from '../../kotlinx/datetime/LocalTime.d.ts'
import type { Month as Month_2 } from '../../kotlinx/datetime/Month.d.ts'
import type { TimeZone } from '../../kotlinx/datetime/TimeZone.d.ts'
import type { UtcOffset } from '../../kotlinx/datetime/UtcOffset.d.ts'
import type { YearMonth as YearMonth_2 } from '../../kotlinx/datetime/YearMonth.d.ts'
export class ConvertersKt extends Object {
    static toJavaDayOfWeek(paramarg0: DayOfWeek_2): DayOfWeek;
    static toJavaLocalDate(paramarg0: LocalDate_2): LocalDate;
    static toJavaLocalDateTime(paramarg0: LocalDateTime_2): LocalDateTime;
    static toJavaLocalTime(paramarg0: LocalTime_2): LocalTime;
    static toJavaMonth(paramarg0: Month_2): Month;
    static toJavaPeriod(paramarg0: DatePeriod): Period;
    static toJavaYearMonth(paramarg0: YearMonth_2): YearMonth;
    static toJavaZoneId(paramarg0: TimeZone): ZoneId;
    static toJavaZoneOffset(paramarg0: FixedOffsetTimeZone): ZoneOffset;
    static toJavaZoneOffset(paramarg0: UtcOffset): ZoneOffset;
    static toKotlinDatePeriod(paramarg0: Period): DatePeriod;
    static toKotlinDayOfWeek(paramarg0: DayOfWeek): DayOfWeek_2;
    static toKotlinFixedOffsetTimeZone(paramarg0: ZoneOffset): FixedOffsetTimeZone;
    static toKotlinLocalDate(paramarg0: LocalDate): LocalDate_2;
    static toKotlinLocalDateTime(paramarg0: LocalDateTime): LocalDateTime_2;
    static toKotlinLocalTime(paramarg0: LocalTime): LocalTime_2;
    static toKotlinMonth(paramarg0: Month): Month_2;
    static toKotlinTimeZone(paramarg0: ZoneId): TimeZone;
    static toKotlinUtcOffset(paramarg0: ZoneOffset): UtcOffset;
    static toKotlinYearMonth(paramarg0: YearMonth): YearMonth_2;
    static toKotlinZoneOffset(paramarg0: ZoneOffset): FixedOffsetTimeZone;
}
import type { DayOfWeek } from '../../../../../../../java/time/DayOfWeek.d.ts'
import type { LocalDateTime } from '../../../../../../../java/time/LocalDateTime.d.ts'
import type { LocalTime } from '../../../../../../../java/time/LocalTime.d.ts'
import type { Month } from '../../../../../../../java/time/Month.d.ts'
import type { OffsetDateTime } from '../../../../../../../java/time/OffsetDateTime.d.ts'
import type { OffsetTime } from '../../../../../../../java/time/OffsetTime.d.ts'
import type { ZoneId } from '../../../../../../../java/time/ZoneId.d.ts'
import type { ZoneOffset } from '../../../../../../../java/time/ZoneOffset.d.ts'
import type { ZonedDateTime } from '../../../../../../../java/time/ZonedDateTime.d.ts'
import type { Temporal } from '../../../../../../../java/time/temporal/Temporal.d.ts'
import type { Calendar } from '../../../../../../../java/util/Calendar.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Calendar as Calendar_2 } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Calendar.d.ts'
import type { TimeZone } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone.d.ts'
export class JavaTimeConverters extends Object {
    static convertCalendar(paraminputCalendar: Calendar): Calendar_2;
    static dayOfWeekToCalendar(paramdow: DayOfWeek): Calendar_2;
    static monthToCalendar(parammonth: Month): Calendar_2;
    static temporalToCalendar(paramdateTime: LocalDateTime): Calendar_2;
    static temporalToCalendar(paramtime: LocalTime): Calendar_2;
    static temporalToCalendar(paramdateTime: OffsetDateTime): Calendar_2;
    static temporalToCalendar(paramtime: OffsetTime): Calendar_2;
    static temporalToCalendar(paramdateTime: ZonedDateTime): Calendar_2;
    static temporalToCalendar(paramtemp: Temporal): Calendar_2;
    static zoneIdToTimeZone(paramzoneId: ZoneId): TimeZone;
    static zoneOffsetToTimeZone(paramzoneOffset: ZoneOffset): TimeZone;
    private constructor()
}
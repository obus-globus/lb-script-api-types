import type { LocalDateTime } from '../../../../../../../java/time/LocalDateTime.d.ts'
import type { LocalTime } from '../../../../../../../java/time/LocalTime.d.ts'
import type { OffsetDateTime } from '../../../../../../../java/time/OffsetDateTime.d.ts'
import type { OffsetTime } from '../../../../../../../java/time/OffsetTime.d.ts'
import type { ZoneId } from '../../../../../../../java/time/ZoneId.d.ts'
import type { ZoneOffset } from '../../../../../../../java/time/ZoneOffset.d.ts'
import type { ZonedDateTime } from '../../../../../../../java/time/ZonedDateTime.d.ts'
import type { Temporal } from '../../../../../../../java/time/temporal/Temporal.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Calendar } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Calendar.d.ts'
import type { TimeZone } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone.d.ts'
export class JavaTimeConverters extends Object {
    static temporalToCalendar(paramdateTime: LocalDateTime): Calendar;
    static temporalToCalendar(paramtime: LocalTime): Calendar;
    static temporalToCalendar(paramdateTime: OffsetDateTime): Calendar;
    static temporalToCalendar(paramtime: OffsetTime): Calendar;
    static temporalToCalendar(paramdateTime: ZonedDateTime): Calendar;
    static temporalToCalendar(paramtemp: Temporal): Calendar;
    static zoneIdToTimeZone(paramzoneId: ZoneId): TimeZone;
    static zoneOffsetToTimeZone(paramzoneOffset: ZoneOffset): TimeZone;
    private constructor()
}
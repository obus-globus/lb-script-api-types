import type { Calendar } from '../../../../com/ibm/icu/util/Calendar.d.ts'
import type { TimeZone } from '../../../../com/ibm/icu/util/TimeZone.d.ts'
import type { LocalDateTime } from '../../../../java/time/LocalDateTime.d.ts'
import type { LocalTime } from '../../../../java/time/LocalTime.d.ts'
import type { OffsetDateTime } from '../../../../java/time/OffsetDateTime.d.ts'
import type { OffsetTime } from '../../../../java/time/OffsetTime.d.ts'
import type { ZoneId } from '../../../../java/time/ZoneId.d.ts'
import type { ZoneOffset } from '../../../../java/time/ZoneOffset.d.ts'
import type { ZonedDateTime } from '../../../../java/time/ZonedDateTime.d.ts'
import type { Temporal } from '../../../../java/time/temporal/Temporal.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JavaTimeConverters extends Object {
    static temporalToCalendar(paramarg0: LocalDateTime): Calendar;
    static temporalToCalendar(paramarg0: LocalTime): Calendar;
    static temporalToCalendar(paramarg0: OffsetDateTime): Calendar;
    static temporalToCalendar(paramarg0: OffsetTime): Calendar;
    static temporalToCalendar(paramarg0: ZonedDateTime): Calendar;
    static temporalToCalendar(paramarg0: Temporal): Calendar;
    static zoneIdToTimeZone(paramarg0: ZoneId): TimeZone;
    static zoneOffsetToTimeZone(paramarg0: ZoneOffset): TimeZone;
    private constructor()
}
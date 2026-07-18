import type { GMTDate } from '../../../../io/ktor/util/date/GMTDate.d.ts'
import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { LocalDateTime } from '../../../../java/time/LocalDateTime.d.ts'
import type { ZoneId } from '../../../../java/time/ZoneId.d.ts'
import type { ZonedDateTime } from '../../../../java/time/ZonedDateTime.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DateUtilsJvmKt extends Object {
    static getGreenwichMeanTime(): ZoneId;
    static toGMTDate(self: Instant): GMTDate;
    static toGMTDate(self: ZonedDateTime): GMTDate;
    static toLocalDateTime(self: Date): LocalDateTime;
    static toZonedDateTime(self: Date): ZonedDateTime;
}
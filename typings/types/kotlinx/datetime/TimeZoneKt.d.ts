import type { Object } from '../../java/lang/Object.d.ts'
import type { Instant } from '../../kotlin/time/Instant.d.ts'
import type { LocalDate } from '../../kotlinx/datetime/LocalDate.d.ts'
import type { LocalDateTime } from '../../kotlinx/datetime/LocalDateTime.d.ts'
import type { OverloadMarker } from '../../kotlinx/datetime/OverloadMarker.d.ts'
import type { TimeZone } from '../../kotlinx/datetime/TimeZone.d.ts'
import type { UtcOffset } from '../../kotlinx/datetime/UtcOffset.d.ts'
export class TimeZoneKt extends Object {
    static atStartOfDayIn(self: LocalDate, timeZone: TimeZone, youShallNotPass: OverloadMarker): Instant;
    static localDateTimeToInstant(dateTime: LocalDateTime, timeZone: TimeZone, preferred: UtcOffset | null): Instant;
    static offsetAt(self: TimeZone, instant: Instant): UtcOffset;
    static offsetIn(self: Instant, timeZone: TimeZone): UtcOffset;
    static toInstant(self: LocalDateTime, timeZone: TimeZone, youShallNotPass: OverloadMarker): Instant;
    static toInstant(self: LocalDateTime, offset: UtcOffset, youShallNotPass: OverloadMarker): Instant;
    static toLocalDateTime(self: Instant, timeZone: TimeZone): LocalDateTime;
    static toLocalDateTime(self: Instant, offset: UtcOffset): LocalDateTime;
}
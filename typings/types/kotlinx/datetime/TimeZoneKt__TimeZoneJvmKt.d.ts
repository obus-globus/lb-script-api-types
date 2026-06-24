import type { Object } from '../../java/lang/Object.d.ts'
import type { Instant } from '../../kotlin/time/Instant.d.ts'
import type { LocalDate } from '../../kotlinx/datetime/LocalDate.d.ts'
import type { LocalDateTime } from '../../kotlinx/datetime/LocalDateTime.d.ts'
import type { OverloadMarker } from '../../kotlinx/datetime/OverloadMarker.d.ts'
import type { TimeZone } from '../../kotlinx/datetime/TimeZone.d.ts'
import type { UtcOffset } from '../../kotlinx/datetime/UtcOffset.d.ts'
export class TimeZoneKt__TimeZoneJvmKt extends Object {
    static atStartOfDayIn(paramarg0: LocalDate, paramarg1: TimeZone, paramarg2: OverloadMarker): Instant;
    static localDateTimeToInstant(paramarg0: LocalDateTime, paramarg1: TimeZone, paramarg2: UtcOffset): Instant;
    static offsetAt(paramarg0: TimeZone, paramarg1: Instant): UtcOffset;
    static toInstant(paramarg0: LocalDateTime, paramarg1: TimeZone, paramarg2: OverloadMarker): Instant;
    static toInstant(paramarg0: LocalDateTime, paramarg1: UtcOffset, paramarg2: OverloadMarker): Instant;
    static toLocalDateTime(paramarg0: Instant, paramarg1: TimeZone): LocalDateTime;
    static toLocalDateTime(paramarg0: Instant, paramarg1: UtcOffset): LocalDateTime;
}
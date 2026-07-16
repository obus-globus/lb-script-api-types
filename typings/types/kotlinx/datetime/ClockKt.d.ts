import type { Object } from '../../java/lang/Object.d.ts'
import type { Clock } from '../../kotlin/time/Clock.d.ts'
import type { Instant } from '../../kotlin/time/Instant.d.ts'
import type { TimeSource } from '../../kotlin/time/TimeSource.d.ts'
import type { TimeSource$WithComparableMarks } from '../../kotlin/time/TimeSource$WithComparableMarks.d.ts'
import type { LocalDate } from '../../kotlinx/datetime/LocalDate.d.ts'
import type { TimeZone } from '../../kotlinx/datetime/TimeZone.d.ts'
export class ClockKt extends Object {
    static asClock(self: TimeSource, origin: Instant): Clock;
    static asTimeSource(self: Clock): TimeSource$WithComparableMarks;
    static todayAt(self: Clock, timeZone: TimeZone): LocalDate;
    static todayIn(self: Clock, timeZone: TimeZone): LocalDate;
}
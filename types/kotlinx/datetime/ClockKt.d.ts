import type { Object } from '../../java/lang/Object.d.ts'
import type { Clock } from '../../kotlin/time/Clock.d.ts'
import type { Instant } from '../../kotlin/time/Instant.d.ts'
import type { TimeSource } from '../../kotlin/time/TimeSource.d.ts'
import type { TimeSource$WithComparableMarks } from '../../kotlin/time/TimeSource$WithComparableMarks.d.ts'
import type { LocalDate } from '../../kotlinx/datetime/LocalDate.d.ts'
import type { TimeZone } from '../../kotlinx/datetime/TimeZone.d.ts'
export class ClockKt extends Object {
    static asClock(paramarg0: TimeSource, paramarg1: Instant): Clock;
    static asTimeSource(paramarg0: Clock): TimeSource$WithComparableMarks;
    static todayAt(paramarg0: Clock, paramarg1: TimeZone): LocalDate;
    static todayIn(paramarg0: Clock, paramarg1: TimeZone): LocalDate;
}
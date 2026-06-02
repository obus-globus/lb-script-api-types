import type { Object } from '../../java/lang/Object.d.ts'
import type { Clock } from '../../kotlin/time/Clock.d.ts'
import type { Instant } from '../../kotlin/time/Instant.d.ts'
import type { TimeSource } from '../../kotlin/time/TimeSource.d.ts'
export class ClocksKt extends Object {
    static fromTimeSource(paramarg0: TimeSource, paramarg1: Instant): Clock;
}
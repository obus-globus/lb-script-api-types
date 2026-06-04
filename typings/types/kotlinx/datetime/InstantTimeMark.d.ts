import type { Object } from '../../java/lang/Object.d.ts'
import type { Clock } from '../../kotlin/time/Clock.d.ts'
import type { ComparableTimeMark } from '../../kotlin/time/ComparableTimeMark.d.ts'
import type { Duration } from '../../kotlin/time/Duration.d.ts'
import type { Instant } from '../../kotlin/time/Instant.d.ts'
export class InstantTimeMark extends Object implements ComparableTimeMark {
    constructor(instant: Instant, clock: Clock)
    // private clock: Clock;
    // private instant: Instant;
    compareTo(other: ComparableTimeMark): number;
    elapsedNow(): Duration;
    equals(other: Object | null): boolean;
    hashCode(): number;
    minus(duration: Duration): ComparableTimeMark;
    minus(other: ComparableTimeMark): Duration;
    plus(duration: Duration): ComparableTimeMark;
    // private saturatingDiff(instant1: Instant, instant2: Instant): Duration;
    toString(): string;
}
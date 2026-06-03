import type { Object } from '../../java/lang/Object.d.ts'
import type { AbstractDoubleTimeSource } from '../../kotlin/time/AbstractDoubleTimeSource.d.ts'
import type { ComparableTimeMark } from '../../kotlin/time/ComparableTimeMark.d.ts'
import type { Duration } from '../../kotlin/time/Duration.d.ts'
export class AbstractDoubleTimeSource$DoubleTimeMark extends Object implements ComparableTimeMark {
    constructor(startedAt: number, timeSource: AbstractDoubleTimeSource, offset: Duration)
    // private offset: Duration;
    // private startedAt: number;
    // private timeSource: AbstractDoubleTimeSource;
    compareTo(other: ComparableTimeMark): number;
    elapsedNow(): Duration;
    equals(other: Object | null): boolean;
    hashCode(): number;
    minus(other: ComparableTimeMark): Duration;
    minus(duration: Duration): ComparableTimeMark;
    minus(duration: Duration): ComparableTimeMark;
    plus(duration: Duration): ComparableTimeMark;
    toString(): string;
}
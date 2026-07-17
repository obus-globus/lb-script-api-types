import type { Object } from '../../java/lang/Object.d.ts'
import type { AbstractLongTimeSource } from '../../kotlin/time/AbstractLongTimeSource.d.ts'
import type { ComparableTimeMark } from '../../kotlin/time/ComparableTimeMark.d.ts'
import type { Duration } from '../../kotlin/time/Duration.d.ts'
export class AbstractLongTimeSource$LongTimeMark extends Object implements ComparableTimeMark {
    protected constructor()
    // private offset: Duration;
    // private startedAt: number;
    // private timeSource: AbstractLongTimeSource;
    compareTo(other: ComparableTimeMark): number;
    elapsedNow(): Duration;
    equals(other: Object | null): boolean;
    hashCode(): number;
    minus(other: ComparableTimeMark): Duration;
    minus(duration: Duration): ComparableTimeMark;
    plus(duration: Duration): ComparableTimeMark;
    toString(): string;
}
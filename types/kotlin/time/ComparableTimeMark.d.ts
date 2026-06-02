import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { Duration } from '../../kotlin/time/Duration.d.ts'
import type { TimeMark } from '../../kotlin/time/TimeMark.d.ts'
export interface ComparableTimeMark extends Object, Comparable<ComparableTimeMark>, TimeMark{
    compareTo(other: ComparableTimeMark): number;
    equals(other: Object | null): boolean;
    hasNotPassedNow(): boolean;
    hasPassedNow(): boolean;
    hashCode(): number;
    minus(other: ComparableTimeMark): Duration;
    minus(duration: Duration): ComparableTimeMark;
    minus(duration: Duration): TimeMark;
    plus(duration: Duration): ComparableTimeMark;
    plus(duration: Duration): TimeMark;
}
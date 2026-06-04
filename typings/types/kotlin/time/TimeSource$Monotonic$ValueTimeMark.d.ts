import type { Object } from '../../java/lang/Object.d.ts'
import type { ComparableTimeMark } from '../../kotlin/time/ComparableTimeMark.d.ts'
import type { Duration } from '../../kotlin/time/Duration.d.ts'
export class TimeSource$Monotonic$ValueTimeMark extends Object implements ComparableTimeMark {
// (invalid TS: name contains '-')     static box-impl(paramarg0: number): TimeSource$Monotonic$ValueTimeMark;
// (invalid TS: name contains '-')     static compareTo-6eNON_k(paramarg0: number, paramarg1: number): number;
// (invalid TS: name contains '-')     static compareTo-impl(paramarg0: number, paramarg1: ComparableTimeMark): number;
// (invalid TS: name contains '-')     static constructor-impl(paramarg0: number): number;
// (invalid TS: name contains '-')     static elapsedNow-UwyO8pc(paramarg0: number): number;
// (invalid TS: name contains '-')     static equals-impl(paramarg0: number, paramarg1: Object): boolean;
// (invalid TS: name contains '-')     static equals-impl0(paramarg0: number, paramarg1: number): boolean;
// (invalid TS: name contains '-')     static hasNotPassedNow-impl(paramarg0: number): boolean;
// (invalid TS: name contains '-')     static hasPassedNow-impl(paramarg0: number): boolean;
// (invalid TS: name contains '-')     static hashCode-impl(paramarg0: number): number;
// (invalid TS: name contains '-')     static minus-6eNON_k(paramarg0: number, paramarg1: number): number;
// (invalid TS: name contains '-')     static minus-LRDsOJo(paramarg0: number, paramarg1: number): number;
// (invalid TS: name contains '-')     static minus-UwyO8pc(paramarg0: number, paramarg1: ComparableTimeMark): number;
// (invalid TS: name contains '-')     static plus-LRDsOJo(paramarg0: number, paramarg1: number): number;
// (invalid TS: name contains '-')     static toString-impl(paramarg0: number): string;
    constructor(reading: number)
    // private reading: number;
    compareTo(other: ComparableTimeMark): number;
    compareTo(other: TimeSource$Monotonic$ValueTimeMark): number;
    elapsedNow(): Duration;
    equals(other: Object | null): boolean;
    hasNotPassedNow(): boolean;
    hasPassedNow(): boolean;
    hashCode(): number;
    minus(duration: Duration): ComparableTimeMark;
    minus(other: ComparableTimeMark): Duration;
    minus(duration: Duration): TimeSource$Monotonic$ValueTimeMark;
    minus(other: TimeSource$Monotonic$ValueTimeMark): Duration;
    plus(duration: Duration): TimeSource$Monotonic$ValueTimeMark;
    toString(): string;
}
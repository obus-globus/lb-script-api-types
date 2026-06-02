import type { Object } from '../../java/lang/Object.d.ts'
import type { ComparableTimeMark } from '../../kotlin/time/ComparableTimeMark.d.ts'
import type { Duration } from '../../kotlin/time/Duration.d.ts'
export class TimeSource$Monotonic$ValueTimeMark extends Object implements ComparableTimeMark {
//     static box-impl(paramarg0: number): TimeSource$Monotonic$ValueTimeMark;
 // ; invalid because of -//     static compareTo-6eNON_k(paramarg0: number, paramarg1: number): number;
 // ; invalid because of -//     static compareTo-impl(paramarg0: number, paramarg1: ComparableTimeMark): number;
 // ; invalid because of -//     static constructor-impl(paramarg0: number): number;
 // ; invalid because of -//     static elapsedNow-UwyO8pc(paramarg0: number): number;
 // ; invalid because of -//     static equals-impl(paramarg0: number, paramarg1: Object): boolean;
 // ; invalid because of -//     static equals-impl0(paramarg0: number, paramarg1: number): boolean;
 // ; invalid because of -//     static hasNotPassedNow-impl(paramarg0: number): boolean;
 // ; invalid because of -//     static hasPassedNow-impl(paramarg0: number): boolean;
 // ; invalid because of -//     static hashCode-impl(paramarg0: number): number;
 // ; invalid because of -//     static minus-6eNON_k(paramarg0: number, paramarg1: number): number;
 // ; invalid because of -//     static minus-LRDsOJo(paramarg0: number, paramarg1: number): number;
 // ; invalid because of -//     static minus-UwyO8pc(paramarg0: number, paramarg1: ComparableTimeMark): number;
 // ; invalid because of -//     static plus-LRDsOJo(paramarg0: number, paramarg1: number): number;
 // ; invalid because of -//     static toString-impl(paramarg0: number): string;
 // ; invalid because of -    constructor(reading: number)
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
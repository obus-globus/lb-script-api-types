import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { TimeUnit } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/TimeUnit.d.ts'
export class Period extends Object {
    static at(paramcount: number, paramunit: TimeUnit): Period;
    static lessThan(paramcount: number, paramunit: TimeUnit): Period;
    static moreThan(paramcount: number, paramunit: TimeUnit): Period;
    private constructor(limit: number, future: boolean, count: number, unit: TimeUnit)
    constructor(timeLimit: number, inFuture: boolean, counts: number[])
    // private counts: number[];
    readonly inFuture: boolean;
    // private timeLimit: number;
    and(count: number, unit: TimeUnit): Period;
    at(): Period;
    equals(rhs: Object | null): boolean;
    equals(rhs: Period): boolean;
    getCount(unit: TimeUnit): number;
    hashCode(): number;
    inFuture(): Period;
    inFuture(future: boolean): Period;
    inPast(): Period;
    inPast(past: boolean): Period;
    isInFuture(): boolean;
    isInPast(): boolean;
    isLessThan(): boolean;
    isMoreThan(): boolean;
    isSet(): boolean;
    isSet(unit: TimeUnit): boolean;
    lessThan(): Period;
    moreThan(): Period;
    omit(unit: TimeUnit): Period;
    // private setFuture(future: boolean): Period;
    // private setTimeLimit(limit: number): Period;
    // private setTimeUnitInternalValue(unit: TimeUnit, value: number): Period;
    // private setTimeUnitValue(unit: TimeUnit, value: number): Period;
}
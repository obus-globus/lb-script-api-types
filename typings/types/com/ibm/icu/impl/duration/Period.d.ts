import type { TimeUnit } from '../../../../../com/ibm/icu/impl/duration/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Period extends Object {
    static at(paramarg0: number, paramarg1: TimeUnit): Period;
    static lessThan(paramarg0: number, paramarg1: TimeUnit): Period;
    static moreThan(paramarg0: number, paramarg1: TimeUnit): Period;
    constructor(arg0: number, arg1: boolean, arg2: number[])
    // private counts: number[];
    // private timeLimit: number;
    and(arg0: number, arg1: TimeUnit): Period;
    at(): Period;
    equals(arg0: Period): boolean;
    equals(arg0: Object | null): boolean;
    getCount(arg0: TimeUnit): number;
    hashCode(): number;
    inFuture(): Period;
    inFuture(arg0: boolean): Period;
    inPast(): Period;
    inPast(arg0: boolean): Period;
    isInFuture(): boolean;
    isInPast(): boolean;
    isLessThan(): boolean;
    isMoreThan(): boolean;
    isSet(): boolean;
    isSet(arg0: TimeUnit): boolean;
    lessThan(): Period;
    moreThan(): Period;
    omit(arg0: TimeUnit): Period;
    // private setFuture(arg0: boolean): Period;
    // private setTimeLimit(arg0: number): Period;
    // private setTimeUnitInternalValue(arg0: TimeUnit, arg1: number): Period;
    // private setTimeUnitValue(arg0: TimeUnit, arg1: number): Period;
}
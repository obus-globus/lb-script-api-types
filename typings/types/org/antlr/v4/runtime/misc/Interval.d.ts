import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Interval extends Object {
    static INTERVAL_POOL_MAX_VALUE: number;
    static INVALID: Interval;
    static of(paramarg0: number, paramarg1: number): Interval;
    constructor(arg0: number, arg1: number)
    a: number;
    b: number;
    adjacent(arg0: Interval): boolean;
    differenceNotProperlyContained(arg0: Interval): Interval;
    disjoint(arg0: Interval): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    intersection(arg0: Interval): Interval;
    length(): number;
    properlyContains(arg0: Interval): boolean;
    startsAfter(arg0: Interval): boolean;
    startsAfterDisjoint(arg0: Interval): boolean;
    startsAfterNonDisjoint(arg0: Interval): boolean;
    startsBeforeDisjoint(arg0: Interval): boolean;
    startsBeforeNonDisjoint(arg0: Interval): boolean;
    toString(): string;
    union(arg0: Interval): Interval;
}
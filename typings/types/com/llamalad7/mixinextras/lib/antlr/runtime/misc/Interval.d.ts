import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Interval extends Object {
    static INVALID: Interval;
    static of(paramarg0: number, paramarg1: number): Interval;
    constructor(arg0: number, arg1: number)
    a: number;
    b: number;
    adjacent(arg0: Interval): boolean;
    disjoint(arg0: Interval): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    startsAfterDisjoint(arg0: Interval): boolean;
    startsBeforeDisjoint(arg0: Interval): boolean;
    toString(): string;
    union(arg0: Interval): Interval;
}
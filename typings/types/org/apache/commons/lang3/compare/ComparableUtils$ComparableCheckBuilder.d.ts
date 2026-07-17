import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class ComparableUtils$ComparableCheckBuilder<A extends Comparable<A>> extends Object {
    private constructor(arg0: A)
    // private a: A;
    between(arg0: A, arg1: A): boolean;
    betweenExclusive(arg0: A, arg1: A): boolean;
    // private betweenOrdered(arg0: A, arg1: A): boolean;
    // private betweenOrderedExclusive(arg0: A, arg1: A): boolean;
    equalTo(arg0: A): boolean;
    greaterThan(arg0: A): boolean;
    greaterThanOrEqualTo(arg0: A): boolean;
    lessThan(arg0: A): boolean;
    lessThanOrEqualTo(arg0: A): boolean;
}
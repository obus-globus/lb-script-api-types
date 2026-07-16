import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
export class IterableComparator<T extends unknown> extends Object implements Comparator<T[]> {
    static compareIterables<T extends unknown>(parama: T[], paramb: T[]): number;
    static comparing<T extends unknown, U extends Comparable<Object>>(paramarg0: (param0: Object) => U): (param0: T, param1: T) => number;
    static comparing<T extends unknown, U extends unknown>(paramarg0: (param0: Object) => U, paramarg1: (param0: Object, param1: Object) => number): (param0: T, param1: T) => number;
    static comparingDouble<T extends unknown>(paramarg0: (param0: Object) => number): (param0: T, param1: T) => number;
    static comparingInt<T extends unknown>(paramarg0: (param0: Object) => number): (param0: T, param1: T) => number;
    static comparingLong<T extends unknown>(paramarg0: (param0: Object) => number): (param0: T, param1: T) => number;
    static naturalOrder<T extends Comparable<Object>>(): (param0: T, param1: T) => number;
    static nullsFirst<T extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: T, param1: T) => number;
    static nullsLast<T extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: T, param1: T) => number;
    static reverseOrder<T extends Comparable<Object>>(): (param0: T, param1: T) => number;
    constructor()
    constructor(comparator: (param0: T, param1: T) => number)
    constructor(comparator: (param0: T, param1: T) => number, shorterFirst: boolean)
    // private comparator: (param0: T, param1: T) => number;
    // private shorterFirst: number;
    compare(a: T[], b: T[]): number;
    reversed(): (param0: T[], param1: T[]) => number;
    thenComparing(arg0: (param0: T[], param1: T[]) => number): (param0: T[], param1: T[]) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: T[]) => U): (param0: T[], param1: T[]) => number;
    thenComparing<U extends unknown>(arg0: (param0: T[]) => U, arg1: (param0: U, param1: U) => number): (param0: T[], param1: T[]) => number;
    thenComparingDouble(arg0: (param0: T[]) => number): (param0: T[], param1: T[]) => number;
    thenComparingInt(arg0: (param0: T[]) => number): (param0: T[], param1: T[]) => number;
    thenComparingLong(arg0: (param0: T[]) => number): (param0: T[], param1: T[]) => number;
}
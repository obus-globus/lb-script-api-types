import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class IterableComparator<T extends unknown> extends Object implements Comparator<T[]> {
    static compareIterables(paramarg0: (Object | null)[], paramarg1: (Object | null)[]): number;
    static comparing(paramarg0: (param0: Object) => Object | null): (param0: Object | null, param1: Object | null) => number;
    static comparing(paramarg0: (param0: Object) => Object | null, paramarg1: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingDouble(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingInt(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingLong(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static naturalOrder(): (param0: Object | null, param1: Object | null) => number;
    static nullsFirst(paramarg0: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static nullsLast(paramarg0: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static reverseOrder(): (param0: Object | null, param1: Object | null) => number;
    constructor()
    constructor(arg0: (param0: T, param1: T) => number)
    constructor(arg0: (param0: T, param1: T) => number, arg1: boolean)
    // private comparator: (param0: T, param1: T) => number;
    // private shorterFirst: number;
    compare(arg0: T[], arg1: T[]): number;
    reversed(): (param0: T[], param1: T[]) => number;
    thenComparing(arg0: (param0: T[], param1: T[]) => number): (param0: T[], param1: T[]) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: T[]) => U): (param0: T[], param1: T[]) => number;
    thenComparing<U extends unknown>(arg0: (param0: T[]) => U, arg1: (param0: U, param1: U) => number): (param0: T[], param1: T[]) => number;
    thenComparingDouble(arg0: (param0: T[]) => number): (param0: T[], param1: T[]) => number;
    thenComparingInt(arg0: (param0: T[]) => number): (param0: T[], param1: T[]) => number;
    thenComparingLong(arg0: (param0: T[]) => number): (param0: T[], param1: T[]) => number;
}
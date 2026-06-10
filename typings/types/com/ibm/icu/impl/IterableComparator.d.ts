import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class IterableComparator<T extends Object | number | string | boolean> extends Object implements Comparator<T[]> {
    static compareIterables(paramarg0: (Object | null)[], paramarg1: (Object | null)[]): number;
    static comparing(paramarg0: (param0: Object) => Object | null): (param0: Object) => boolean;
    static comparing(paramarg0: (param0: Object) => Object | null, paramarg1: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingDouble(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static comparingInt(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static comparingLong(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static naturalOrder(): (param0: Object) => boolean;
    static nullsFirst(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static nullsLast(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static reverseOrder(): (param0: Object) => boolean;
    constructor()
    constructor(arg0: (param0: Object) => boolean)
    constructor(arg0: (param0: Object) => boolean, arg1: boolean)
    // private comparator: (param0: Object) => boolean;
    // private shorterFirst: number;
    compare(arg0: T[], arg1: T[]): number;
    reversed(): (param0: Object) => boolean;
    thenComparing(arg0: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparing<U extends Comparable<U>>(arg0: (param0: T[]) => U): (param0: Object) => boolean;
    thenComparing<U extends Object | number | string | boolean>(arg0: (param0: T[]) => U, arg1: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparingDouble(arg0: (param0: T[]) => number): (param0: Object) => boolean;
    thenComparingInt(arg0: (param0: T[]) => number): (param0: Object) => boolean;
    thenComparingLong(arg0: (param0: T[]) => number): (param0: Object) => boolean;
}
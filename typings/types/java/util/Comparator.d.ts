import type { Function } from '../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export interface Comparator<T extends unknown> extends Object {
    compare(arg0: T, arg1: T): number;
    reversed(): (param0: T, param1: T) => number;
    thenComparing(arg0: (param0: T, param1: T) => number): (param0: T, param1: T) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: T) => U): (param0: T, param1: T) => number;
    thenComparing<U extends unknown>(arg0: (param0: T) => U, arg1: (param0: U, param1: U) => number): (param0: T, param1: T) => number;
    thenComparingDouble(arg0: (param0: T) => number): (param0: T, param1: T) => number;
    thenComparingInt(arg0: (param0: T) => number): (param0: T, param1: T) => number;
    thenComparingLong(arg0: (param0: T) => number): (param0: T, param1: T) => number;
}
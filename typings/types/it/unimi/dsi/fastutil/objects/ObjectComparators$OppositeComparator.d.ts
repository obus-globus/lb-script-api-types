import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class ObjectComparators$OppositeComparator<K extends unknown> extends Object implements Serializable, Comparator<K> {
    constructor(arg0: (param0: K, param1: K) => number)
    // private comparator: (param0: K, param1: K) => number;
    compare(arg0: K, arg1: K): number;
    reversed(): (param0: K, param1: K) => number;
    thenComparing(arg0: (param0: K, param1: K) => number): (param0: K, param1: K) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: K) => U): (param0: K, param1: K) => number;
    thenComparing<U extends unknown>(arg0: (param0: K) => U, arg1: (param0: U, param1: U) => number): (param0: K, param1: K) => number;
    thenComparingDouble(arg0: (param0: K) => number): (param0: K, param1: K) => number;
    thenComparingInt(arg0: (param0: K) => number): (param0: K, param1: K) => number;
    thenComparingLong(arg0: (param0: K) => number): (param0: K, param1: K) => number;
}
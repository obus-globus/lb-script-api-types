import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export abstract class KeyAnalyzer<K extends unknown> extends Object implements Serializable, Comparator<K> {
    static EQUAL_BIT_KEY: number;
    static NULL_BIT_KEY: number;
    static OUT_OF_BOUNDS_BIT_KEY: number;
    constructor()
    bitIndex(arg0: K, arg1: number, arg2: number, arg3: K, arg4: number, arg5: number): number;
    bitsPerElement(): number;
    compare(arg0: K, arg1: K): number;
    isBitSet(arg0: K, arg1: number, arg2: number): boolean;
    isPrefix(arg0: K, arg1: number, arg2: number, arg3: K): boolean;
    lengthInBits(arg0: K): number;
    reversed(): (param0: K, param1: K) => number;
    thenComparing(arg0: (param0: K, param1: K) => number): (param0: K, param1: K) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: K) => U): (param0: K, param1: K) => number;
    thenComparing<U extends unknown>(arg0: (param0: K) => U, arg1: (param0: U, param1: U) => number): (param0: K, param1: K) => number;
    thenComparingDouble(arg0: (param0: K) => number): (param0: K, param1: K) => number;
    thenComparingInt(arg0: (param0: K) => number): (param0: K, param1: K) => number;
    thenComparingLong(arg0: (param0: K) => number): (param0: K, param1: K) => number;
}
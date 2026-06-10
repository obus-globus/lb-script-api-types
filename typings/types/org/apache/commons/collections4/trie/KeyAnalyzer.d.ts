import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export abstract class KeyAnalyzer<K extends Object | number | string | boolean> extends Object implements Serializable, Comparator<K> {
    static EQUAL_BIT_KEY: number;
    static NULL_BIT_KEY: number;
    static OUT_OF_BOUNDS_BIT_KEY: number;
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
    bitIndex(arg0: K, arg1: number, arg2: number, arg3: K, arg4: number, arg5: number): number;
    bitsPerElement(): number;
    compare(arg0: K, arg1: K): number;
    isBitSet(arg0: K, arg1: number, arg2: number): boolean;
    isPrefix(arg0: K, arg1: number, arg2: number, arg3: K): boolean;
    lengthInBits(arg0: K): number;
    reversed(): (param0: Object) => boolean;
    thenComparing(arg0: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparing<U extends Comparable<U>>(arg0: (param0: K) => U): (param0: Object) => boolean;
    thenComparing<U extends Object | number | string | boolean>(arg0: (param0: K) => U, arg1: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparingDouble(arg0: (param0: K) => number): (param0: Object) => boolean;
    thenComparingInt(arg0: (param0: K) => number): (param0: Object) => boolean;
    thenComparingLong(arg0: (param0: K) => number): (param0: Object) => boolean;
}
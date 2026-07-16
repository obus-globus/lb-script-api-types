import type { Int2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleFunction.d.ts'
import type { Int2IntFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntFunction.d.ts'
import type { Int2LongFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongFunction.d.ts'
import type { Int2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ObjectFunction.d.ts'
import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class IntComparators$OppositeImplicitComparator extends Object implements IntComparator, Serializable {
    static comparing<U extends Comparable<Object>>(paramarg0: (param0: number) => U): (param0: number, param1: number) => number;
    static comparing<U extends Comparable<Object>>(paramarg0: (param0: number) => U, paramarg1: (param0: Object, param1: Object) => number): (param0: number, param1: number) => number;
    static comparingDouble(paramarg0: (param0: number) => number): (param0: number, param1: number) => number;
    static comparingInt(paramarg0: (param0: number) => number): (param0: number, param1: number) => number;
    static comparingLong(paramarg0: (param0: number) => number): (param0: number, param1: number) => number;
    constructor()
    compare(arg0: number, arg1: number): number;
    // private readResolve(): Object;
    reversed(): (param0: number, param1: number) => number;
    thenComparing(arg0: (param0: number, param1: number) => number): (param0: number, param1: number) => number;
}
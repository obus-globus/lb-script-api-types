import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { BigInteger } from '../../../../../../../java/math/BigInteger.d.ts'
import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
import type { ObjectiveFunction } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/ObjectiveFunction.d.ts'
export class ObjectiveFunctionComparator extends Object implements Serializable, Comparator<number> {
    static comparing<T extends unknown, U extends Comparable<Object>>(paramarg0: (param0: Object) => U): (param0: T, param1: T) => number;
    static comparing<T extends unknown, U extends unknown>(paramarg0: (param0: Object) => U, paramarg1: (param0: Object, param1: Object) => number): (param0: T, param1: T) => number;
    static comparingDouble<T extends unknown>(paramarg0: (param0: Object) => number): (param0: T, param1: T) => number;
    static comparingInt<T extends unknown>(paramarg0: (param0: Object) => number): (param0: T, param1: T) => number;
    static comparingLong<T extends unknown>(paramarg0: (param0: Object) => number): (param0: T, param1: T) => number;
    static naturalOrder<T extends Comparable<Object>>(): (param0: T, param1: T) => number;
    static nullsFirst<T extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: T, param1: T) => number;
    static nullsLast<T extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: T, param1: T) => number;
    static reverseOrder<T extends Comparable<Object>>(): (param0: T, param1: T) => number;
    constructor(arg0: ObjectiveFunction)
    // private obj: { [key: number]: BigInteger };
    compare(arg0: number, arg1: number): number;
    reversed(): (param0: number, param1: number) => number;
    thenComparing(arg0: (param0: number, param1: number) => number): (param0: number, param1: number) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: number) => U): (param0: number, param1: number) => number;
    thenComparing<U extends unknown>(arg0: (param0: number) => U, arg1: (param0: U, param1: U) => number): (param0: number, param1: number) => number;
    thenComparingDouble(arg0: (param0: number) => number): (param0: number, param1: number) => number;
    thenComparingInt(arg0: (param0: number) => number): (param0: number, param1: number) => number;
    thenComparingLong(arg0: (param0: number) => number): (param0: number, param1: number) => number;
}
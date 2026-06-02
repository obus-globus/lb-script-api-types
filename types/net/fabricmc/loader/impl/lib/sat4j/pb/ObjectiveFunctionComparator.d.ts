import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { BigInteger } from '../../../../../../../java/math/BigInteger.d.ts'
import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ObjectiveFunction } from '../../../../../../../net/fabricmc/loader/impl/lib/sat4j/pb/ObjectiveFunction.d.ts'
export class ObjectiveFunctionComparator extends Object implements Serializable, Comparator<number> {
    static comparing(paramarg0: (param0: Object | null) => Object | null): (param0: Object | null) => kotlin.Boolean;
    static comparing(paramarg0: (param0: Object | null) => Object | null, paramarg1: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingDouble(paramarg0: (param0: Object | null) => kotlin.Double): (param0: Object | null) => kotlin.Boolean;
    static comparingInt(paramarg0: (param0: Object | null) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static comparingLong(paramarg0: (param0: Object | null) => kotlin.Long): (param0: Object | null) => kotlin.Boolean;
    static naturalOrder(): (param0: Object | null) => kotlin.Boolean;
    static nullsFirst(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static nullsLast(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static reverseOrder(): (param0: Object | null) => kotlin.Boolean;
    constructor(arg0: ObjectiveFunction)
    // private obj: { [key: number]: BigInteger };
    compare(arg0: number, arg1: number): number;
    reversed(): (param0: T) => kotlin.Boolean;
    thenComparing(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    thenComparing(arg0: (param0: T) => U): (param0: T) => kotlin.Boolean;
    thenComparing(arg0: (param0: T) => U, arg1: (param0: U) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    thenComparingDouble(arg0: (param0: T) => kotlin.Double): (param0: T) => kotlin.Boolean;
    thenComparingInt(arg0: (param0: T) => kotlin.Int): (param0: T) => kotlin.Boolean;
    thenComparingLong(arg0: (param0: T) => kotlin.Long): (param0: T) => kotlin.Boolean;
}
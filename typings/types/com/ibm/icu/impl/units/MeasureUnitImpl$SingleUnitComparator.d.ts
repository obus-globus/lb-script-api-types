import type { SingleUnitImpl } from '../../../../../com/ibm/icu/impl/units/SingleUnitImpl.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class MeasureUnitImpl$SingleUnitComparator extends Object implements Comparator<SingleUnitImpl> {
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
    compare(arg0: SingleUnitImpl, arg1: SingleUnitImpl): number;
    reversed(): (param0: SingleUnitImpl, param1: SingleUnitImpl) => number;
    thenComparing(arg0: (param0: SingleUnitImpl, param1: SingleUnitImpl) => number): (param0: SingleUnitImpl, param1: SingleUnitImpl) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: SingleUnitImpl) => U): (param0: SingleUnitImpl, param1: SingleUnitImpl) => number;
    thenComparing<U extends unknown>(arg0: (param0: SingleUnitImpl) => U, arg1: (param0: U, param1: U) => number): (param0: SingleUnitImpl, param1: SingleUnitImpl) => number;
    thenComparingDouble(arg0: (param0: SingleUnitImpl) => number): (param0: SingleUnitImpl, param1: SingleUnitImpl) => number;
    thenComparingInt(arg0: (param0: SingleUnitImpl) => number): (param0: SingleUnitImpl, param1: SingleUnitImpl) => number;
    thenComparingLong(arg0: (param0: SingleUnitImpl) => number): (param0: SingleUnitImpl, param1: SingleUnitImpl) => number;
}
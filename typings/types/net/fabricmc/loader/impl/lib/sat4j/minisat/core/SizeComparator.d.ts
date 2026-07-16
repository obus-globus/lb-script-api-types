import type { Serializable } from '../../../../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../../java/lang/Comparable.d.ts'
import type { Constr } from '../../../../../../../../net/fabricmc/loader/impl/lib/sat4j/specs/Constr.d.ts'
export class SizeComparator extends Object implements Serializable, Comparator<Constr> {
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
    compare(arg0: Constr, arg1: Constr): number;
    reversed(): (param0: Constr, param1: Constr) => number;
    thenComparing(arg0: (param0: Constr, param1: Constr) => number): (param0: Constr, param1: Constr) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: Constr) => U): (param0: Constr, param1: Constr) => number;
    thenComparing<U extends unknown>(arg0: (param0: Constr) => U, arg1: (param0: U, param1: U) => number): (param0: Constr, param1: Constr) => number;
    thenComparingDouble(arg0: (param0: Constr) => number): (param0: Constr, param1: Constr) => number;
    thenComparingInt(arg0: (param0: Constr) => number): (param0: Constr, param1: Constr) => number;
    thenComparingLong(arg0: (param0: Constr) => number): (param0: Constr, param1: Constr) => number;
}
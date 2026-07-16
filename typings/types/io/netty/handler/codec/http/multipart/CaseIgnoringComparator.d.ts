import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../java/lang/CharSequence.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
export class CaseIgnoringComparator extends Object implements Serializable, Comparator<CharSequence> {
    static comparing(paramarg0: (param0: Object) => Object | null): (param0: Object | null, param1: Object | null) => number;
    static comparing(paramarg0: (param0: Object) => Object | null, paramarg1: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingDouble(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingInt(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingLong(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static naturalOrder(): (param0: Object | null, param1: Object | null) => number;
    static nullsFirst(paramarg0: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static nullsLast(paramarg0: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static reverseOrder(): (param0: Object | null, param1: Object | null) => number;
    private constructor()
    compare(arg0: CharSequence, arg1: CharSequence): number;
    // private readResolve(): Object;
    reversed(): (param0: CharSequence, param1: CharSequence) => number;
    thenComparing(arg0: (param0: CharSequence, param1: CharSequence) => number): (param0: CharSequence, param1: CharSequence) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: CharSequence) => U): (param0: CharSequence, param1: CharSequence) => number;
    thenComparing<U extends unknown>(arg0: (param0: CharSequence) => U, arg1: (param0: U, param1: U) => number): (param0: CharSequence, param1: CharSequence) => number;
    thenComparingDouble(arg0: (param0: CharSequence) => number): (param0: CharSequence, param1: CharSequence) => number;
    thenComparingInt(arg0: (param0: CharSequence) => number): (param0: CharSequence, param1: CharSequence) => number;
    thenComparingLong(arg0: (param0: CharSequence) => number): (param0: CharSequence, param1: CharSequence) => number;
}
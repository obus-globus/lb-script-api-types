import type { Comparator } from '../../../java/util/Comparator.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
import type { Intervalable } from '../../../org/ahocorasick/interval/Intervalable.d.ts'
export class IntervalableComparatorByPosition extends Object implements Comparator<Intervalable> {
    static comparing(paramarg0: (param0: Object) => Object | null): (param0: Object | null, param1: Object | null) => number;
    static comparing(paramarg0: (param0: Object) => Object | null, paramarg1: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingDouble(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingInt(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingLong(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static naturalOrder(): (param0: Object | null, param1: Object | null) => number;
    static nullsFirst(paramarg0: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static nullsLast(paramarg0: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static reverseOrder(): (param0: Object | null, param1: Object | null) => number;
    constructor()
    compare(arg0: Intervalable, arg1: Intervalable): number;
    reversed(): (param0: Intervalable, param1: Intervalable) => number;
    thenComparing(arg0: (param0: Intervalable, param1: Intervalable) => number): (param0: Intervalable, param1: Intervalable) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: Intervalable) => U): (param0: Intervalable, param1: Intervalable) => number;
    thenComparing<U extends unknown>(arg0: (param0: Intervalable) => U, arg1: (param0: U, param1: U) => number): (param0: Intervalable, param1: Intervalable) => number;
    thenComparingDouble(arg0: (param0: Intervalable) => number): (param0: Intervalable, param1: Intervalable) => number;
    thenComparingInt(arg0: (param0: Intervalable) => number): (param0: Intervalable, param1: Intervalable) => number;
    thenComparingLong(arg0: (param0: Intervalable) => number): (param0: Intervalable, param1: Intervalable) => number;
}
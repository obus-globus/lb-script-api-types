import type { Multiset$Entry } from '../../../../com/google/common/collect/Multiset$Entry.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class Multisets$DecreasingCount extends Object implements Comparator<Multiset$Entry<Object>> {
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
    compare(entry1: Multiset$Entry<Object>, entry2: Multiset$Entry<Object>): number;
    reversed(): (param0: Multiset$Entry<Object>, param1: Multiset$Entry<Object>) => number;
    thenComparing(arg0: (param0: Multiset$Entry<Object>, param1: Multiset$Entry<Object>) => number): (param0: Multiset$Entry<Object>, param1: Multiset$Entry<Object>) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: Multiset$Entry<Object>) => U): (param0: Multiset$Entry<Object>, param1: Multiset$Entry<Object>) => number;
    thenComparing<U extends unknown>(arg0: (param0: Multiset$Entry<Object>) => U, arg1: (param0: U, param1: U) => number): (param0: Multiset$Entry<Object>, param1: Multiset$Entry<Object>) => number;
    thenComparingDouble(arg0: (param0: Multiset$Entry<Object>) => number): (param0: Multiset$Entry<Object>, param1: Multiset$Entry<Object>) => number;
    thenComparingInt(arg0: (param0: Multiset$Entry<Object>) => number): (param0: Multiset$Entry<Object>, param1: Multiset$Entry<Object>) => number;
    thenComparingLong(arg0: (param0: Multiset$Entry<Object>) => number): (param0: Multiset$Entry<Object>, param1: Multiset$Entry<Object>) => number;
}
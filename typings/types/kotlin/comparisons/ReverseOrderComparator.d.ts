import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Function } from '../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export class ReverseOrderComparator extends Object implements Comparator<Comparable<Object>> {
    static INSTANCE: ReverseOrderComparator;
    static comparing(paramarg0: (param0: Object) => Object | null): (param0: Object) => boolean;
    static comparing(paramarg0: (param0: Object) => Object | null, paramarg1: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingDouble(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static comparingInt(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static comparingLong(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static naturalOrder(): (param0: Object) => boolean;
    static nullsFirst(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static nullsLast(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static reverseOrder(): (param0: Object) => boolean;
    compare(a: Comparable<Object>, b: Comparable<Object>): number;
    reversed(): (param0: Object) => boolean;
    thenComparing(arg0: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparing<U extends Comparable<U>>(arg0: (param0: Comparable<Object>) => U): (param0: Object) => boolean;
    thenComparing<U extends unknown>(arg0: (param0: Comparable<Object>) => U, arg1: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparingDouble(arg0: (param0: Comparable<Object>) => number): (param0: Object) => boolean;
    thenComparingInt(arg0: (param0: Comparable<Object>) => number): (param0: Object) => boolean;
    thenComparingLong(arg0: (param0: Comparable<Object>) => number): (param0: Object) => boolean;
}
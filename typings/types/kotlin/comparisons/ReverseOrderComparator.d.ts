import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Function } from '../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export class ReverseOrderComparator extends Object implements Comparator<Comparable<Object>> {
    static INSTANCE: ReverseOrderComparator;
    compare(a: Comparable<Object>, b: Comparable<Object>): number;
    reversed(): (param0: Comparable<Object>, param1: Comparable<Object>) => number;
    thenComparing(arg0: (param0: Comparable<Object>, param1: Comparable<Object>) => number): (param0: Comparable<Object>, param1: Comparable<Object>) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: Comparable<Object>) => U): (param0: Comparable<Object>, param1: Comparable<Object>) => number;
    thenComparing<U extends unknown>(arg0: (param0: Comparable<Object>) => U, arg1: (param0: U, param1: U) => number): (param0: Comparable<Object>, param1: Comparable<Object>) => number;
    thenComparingDouble(arg0: (param0: Comparable<Object>) => number): (param0: Comparable<Object>, param1: Comparable<Object>) => number;
    thenComparingInt(arg0: (param0: Comparable<Object>) => number): (param0: Comparable<Object>, param1: Comparable<Object>) => number;
    thenComparingLong(arg0: (param0: Comparable<Object>) => number): (param0: Comparable<Object>, param1: Comparable<Object>) => number;
}
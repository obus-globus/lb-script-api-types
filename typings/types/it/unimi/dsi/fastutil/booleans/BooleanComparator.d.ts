import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export interface BooleanComparator extends Comparator<boolean>, Object {
    compare(arg0: boolean, arg1: boolean): number;
    reversed(): (param0: boolean, param1: boolean) => number;
    thenComparing(arg0: (param0: boolean, param1: boolean) => number): (param0: boolean, param1: boolean) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: boolean) => U): (param0: boolean, param1: boolean) => number;
    thenComparing<U extends unknown>(arg0: (param0: boolean) => U, arg1: (param0: U, param1: U) => number): (param0: boolean, param1: boolean) => number;
    thenComparingDouble(arg0: (param0: boolean) => number): (param0: boolean, param1: boolean) => number;
    thenComparingInt(arg0: (param0: boolean) => number): (param0: boolean, param1: boolean) => number;
    thenComparingLong(arg0: (param0: boolean) => number): (param0: boolean, param1: boolean) => number;
}
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export interface CharComparator extends Comparator<string>, Object {
    compare(arg0: string, arg1: string): number;
    reversed(): (param0: string, param1: string) => number;
    thenComparing(arg0: (param0: string, param1: string) => number): (param0: string, param1: string) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: string) => U): (param0: string, param1: string) => number;
    thenComparing<U extends unknown>(arg0: (param0: string) => U, arg1: (param0: U, param1: U) => number): (param0: string, param1: string) => number;
    thenComparingDouble(arg0: (param0: string) => number): (param0: string, param1: string) => number;
    thenComparingInt(arg0: (param0: string) => number): (param0: string, param1: string) => number;
    thenComparingLong(arg0: (param0: string) => number): (param0: string, param1: string) => number;
}
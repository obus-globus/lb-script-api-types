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
    reversed(): (param0: Object) => boolean;
    thenComparing(arg0: (param0: string, param1: string) => number): (param0: string, param1: string) => number;
    thenComparing(arg0: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparing<U extends Comparable<U>>(arg0: (param0: string) => U): (param0: Object) => boolean;
    thenComparing<U extends Object | number | string | boolean>(arg0: (param0: string) => U, arg1: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparingDouble(arg0: (param0: string) => number): (param0: Object) => boolean;
    thenComparingInt(arg0: (param0: string) => number): (param0: Object) => boolean;
    thenComparingLong(arg0: (param0: string) => number): (param0: Object) => boolean;
}
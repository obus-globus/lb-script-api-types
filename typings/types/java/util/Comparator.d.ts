import type { Function } from '../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
export interface Comparator<T extends Object | number | string | boolean> extends Object {
    compare(arg0: T, arg1: T): number;
    reversed(): (param0: Object) => boolean;
    thenComparing(arg0: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparing<U extends Comparable<U>>(arg0: (param0: T) => U): (param0: Object) => boolean;
    thenComparing<U extends Object | number | string | boolean>(arg0: (param0: T) => U, arg1: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparingDouble(arg0: (param0: T) => number): (param0: Object) => boolean;
    thenComparingInt(arg0: (param0: T) => number): (param0: Object) => boolean;
    thenComparingLong(arg0: (param0: T) => number): (param0: Object) => boolean;
}
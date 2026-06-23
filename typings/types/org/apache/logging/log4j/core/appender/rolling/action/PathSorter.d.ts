import type { Comparator } from '../../../../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../../java/lang/Comparable.d.ts'
import type { PathWithAttributes } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/PathWithAttributes.d.ts'
export interface PathSorter extends Comparator<PathWithAttributes>, Object {
    reversed(): (param0: Object) => boolean;
    thenComparing(arg0: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparing<U extends Comparable<U>>(arg0: (param0: PathWithAttributes) => U): (param0: Object) => boolean;
    thenComparing<U extends unknown>(arg0: (param0: PathWithAttributes) => U, arg1: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparingDouble(arg0: (param0: PathWithAttributes) => number): (param0: Object) => boolean;
    thenComparingInt(arg0: (param0: PathWithAttributes) => number): (param0: Object) => boolean;
    thenComparingLong(arg0: (param0: PathWithAttributes) => number): (param0: Object) => boolean;
}
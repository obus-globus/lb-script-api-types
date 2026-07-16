import type { Comparator } from '../../../../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../../java/lang/Comparable.d.ts'
import type { PathWithAttributes } from '../../../../../../../../org/apache/logging/log4j/core/appender/rolling/action/PathWithAttributes.d.ts'
export interface PathSorter extends Comparator<PathWithAttributes>, Object {
    reversed(): (param0: PathWithAttributes, param1: PathWithAttributes) => number;
    thenComparing(arg0: (param0: PathWithAttributes, param1: PathWithAttributes) => number): (param0: PathWithAttributes, param1: PathWithAttributes) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: PathWithAttributes) => U): (param0: PathWithAttributes, param1: PathWithAttributes) => number;
    thenComparing<U extends unknown>(arg0: (param0: PathWithAttributes) => U, arg1: (param0: U, param1: U) => number): (param0: PathWithAttributes, param1: PathWithAttributes) => number;
    thenComparingDouble(arg0: (param0: PathWithAttributes) => number): (param0: PathWithAttributes, param1: PathWithAttributes) => number;
    thenComparingInt(arg0: (param0: PathWithAttributes) => number): (param0: PathWithAttributes, param1: PathWithAttributes) => number;
    thenComparingLong(arg0: (param0: PathWithAttributes) => number): (param0: PathWithAttributes, param1: PathWithAttributes) => number;
}
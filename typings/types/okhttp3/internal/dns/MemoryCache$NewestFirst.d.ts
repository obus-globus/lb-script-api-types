import type { Comparator } from '../../../java/util/Comparator.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { ComparableTimeMark } from '../../../kotlin/time/ComparableTimeMark.d.ts'
export class MemoryCache$NewestFirst extends Object implements Comparator<Pair<ComparableTimeMark, Object>> {
    static INSTANCE: MemoryCache$NewestFirst;
    compare(o1: Pair<ComparableTimeMark, Object>, o2: Pair<ComparableTimeMark, Object>): number;
    reversed(): (param0: Pair<ComparableTimeMark, Object>, param1: Pair<ComparableTimeMark, Object>) => number;
    thenComparing(arg0: (param0: Pair<ComparableTimeMark, Object>, param1: Pair<ComparableTimeMark, Object>) => number): (param0: Pair<ComparableTimeMark, Object>, param1: Pair<ComparableTimeMark, Object>) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: Pair<ComparableTimeMark, Object>) => U): (param0: Pair<ComparableTimeMark, Object>, param1: Pair<ComparableTimeMark, Object>) => number;
    thenComparing<U extends unknown>(arg0: (param0: Pair<ComparableTimeMark, Object>) => U, arg1: (param0: U, param1: U) => number): (param0: Pair<ComparableTimeMark, Object>, param1: Pair<ComparableTimeMark, Object>) => number;
    thenComparingDouble(arg0: (param0: Pair<ComparableTimeMark, Object>) => number): (param0: Pair<ComparableTimeMark, Object>, param1: Pair<ComparableTimeMark, Object>) => number;
    thenComparingInt(arg0: (param0: Pair<ComparableTimeMark, Object>) => number): (param0: Pair<ComparableTimeMark, Object>, param1: Pair<ComparableTimeMark, Object>) => number;
    thenComparingLong(arg0: (param0: Pair<ComparableTimeMark, Object>) => number): (param0: Pair<ComparableTimeMark, Object>, param1: Pair<ComparableTimeMark, Object>) => number;
}
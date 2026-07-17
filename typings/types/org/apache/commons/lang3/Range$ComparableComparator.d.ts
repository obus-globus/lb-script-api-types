import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Range$ComparableComparator extends Enum<Range$ComparableComparator> implements Comparator<Object> {
    static INSTANCE: Range$ComparableComparator;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Range$ComparableComparator;
    static values(): Range$ComparableComparator[];
    private constructor()
    compare(arg0: Object, arg1: Object): number;
    reversed(): (param0: Object, param1: Object) => number;
    thenComparing(arg0: (param0: Object, param1: Object) => number): (param0: Object, param1: Object) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: Object) => U): (param0: Object, param1: Object) => number;
    thenComparing<U extends unknown>(arg0: (param0: Object) => U, arg1: (param0: U, param1: U) => number): (param0: Object, param1: Object) => number;
    thenComparingDouble(arg0: (param0: Object) => number): (param0: Object, param1: Object) => number;
    thenComparingInt(arg0: (param0: Object) => number): (param0: Object, param1: Object) => number;
    thenComparingLong(arg0: (param0: Object) => number): (param0: Object, param1: Object) => number;
    name(): "INSTANCE";
}
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanComparator extends Comparator<boolean>, Object{
    compare(arg0: boolean, arg1: boolean): number;
    compare(arg0: boolean, arg1: boolean): number;
    reversed(): (param0: boolean, param1: boolean) => kotlin.Int;
    reversed(): (param0: T) => kotlin.Boolean;
    thenComparing(arg0: (param0: boolean, param1: boolean) => kotlin.Int): (param0: boolean, param1: boolean) => kotlin.Int;
    thenComparing(arg0: (param0: boolean) => kotlin.Boolean): (param0: boolean) => kotlin.Boolean;
    thenComparing(arg0: (param0: boolean) => U): (param0: boolean) => kotlin.Boolean;
    thenComparing(arg0: (param0: boolean) => U, arg1: (param0: U) => kotlin.Boolean): (param0: boolean) => kotlin.Boolean;
    thenComparing(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    thenComparing(arg0: (param0: T) => U): (param0: T) => kotlin.Boolean;
    thenComparing(arg0: (param0: T) => U, arg1: (param0: U) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    thenComparingDouble(arg0: (param0: T) => kotlin.Double): (param0: T) => kotlin.Boolean;
    thenComparingInt(arg0: (param0: T) => kotlin.Int): (param0: T) => kotlin.Boolean;
    thenComparingLong(arg0: (param0: T) => kotlin.Long): (param0: T) => kotlin.Boolean;
}
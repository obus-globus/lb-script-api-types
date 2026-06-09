import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharComparator extends Comparator<string>, Object {
    compare(arg0: string, arg1: string): number;
    reversed(): (param0: string, param1: string) => kotlin.Int;
    reversed(): (param0: T) => kotlin.Boolean;
    thenComparing(arg0: (param0: string, param1: string) => kotlin.Int): (param0: string, param1: string) => kotlin.Int;
    thenComparing(arg0: (param0: string) => kotlin.Boolean): (param0: string) => kotlin.Boolean;
    thenComparing(arg0: (param0: string) => U): (param0: string) => kotlin.Boolean;
    thenComparing(arg0: (param0: string) => U, arg1: (param0: U) => kotlin.Boolean): (param0: string) => kotlin.Boolean;
    thenComparing(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    thenComparing(arg0: (param0: T) => U): (param0: T) => kotlin.Boolean;
    thenComparing(arg0: (param0: T) => U, arg1: (param0: U) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    thenComparingDouble(arg0: (param0: T) => kotlin.Double): (param0: T) => kotlin.Boolean;
    thenComparingInt(arg0: (param0: T) => kotlin.Int): (param0: T) => kotlin.Boolean;
    thenComparingLong(arg0: (param0: T) => kotlin.Long): (param0: T) => kotlin.Boolean;
}
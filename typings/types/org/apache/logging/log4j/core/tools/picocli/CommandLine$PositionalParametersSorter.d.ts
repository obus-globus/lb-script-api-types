import type { Field } from '../../../../../../../java/lang/reflect/Field.d.ts'
import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
export class CommandLine$PositionalParametersSorter extends Object implements Comparator<Field> {
    private constructor()
    compare(o1: Field, o2: Field): number;
    reversed(): (param0: Field, param1: Field) => number;
    thenComparing(arg0: (param0: Field, param1: Field) => number): (param0: Field, param1: Field) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: Field) => U): (param0: Field, param1: Field) => number;
    thenComparing<U extends unknown>(arg0: (param0: Field) => U, arg1: (param0: U, param1: U) => number): (param0: Field, param1: Field) => number;
    thenComparingDouble(arg0: (param0: Field) => number): (param0: Field, param1: Field) => number;
    thenComparingInt(arg0: (param0: Field) => number): (param0: Field, param1: Field) => number;
    thenComparingLong(arg0: (param0: Field) => number): (param0: Field, param1: Field) => number;
}
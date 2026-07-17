import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { KeyMapping$Category } from '../../../../../../net/minecraft/client/KeyMapping$Category.d.ts'
export class CategoryComparator extends Object implements Comparator<KeyMapping$Category> {
    static INSTANCE: CategoryComparator;
    constructor()
    compare(arg0: KeyMapping$Category, arg1: KeyMapping$Category): number;
    reversed(): (param0: KeyMapping$Category, param1: KeyMapping$Category) => number;
    thenComparing(arg0: (param0: KeyMapping$Category, param1: KeyMapping$Category) => number): (param0: KeyMapping$Category, param1: KeyMapping$Category) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: KeyMapping$Category) => U): (param0: KeyMapping$Category, param1: KeyMapping$Category) => number;
    thenComparing<U extends unknown>(arg0: (param0: KeyMapping$Category) => U, arg1: (param0: U, param1: U) => number): (param0: KeyMapping$Category, param1: KeyMapping$Category) => number;
    thenComparingDouble(arg0: (param0: KeyMapping$Category) => number): (param0: KeyMapping$Category, param1: KeyMapping$Category) => number;
    thenComparingInt(arg0: (param0: KeyMapping$Category) => number): (param0: KeyMapping$Category, param1: KeyMapping$Category) => number;
    thenComparingLong(arg0: (param0: KeyMapping$Category) => number): (param0: KeyMapping$Category, param1: KeyMapping$Category) => number;
}
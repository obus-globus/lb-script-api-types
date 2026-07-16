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
    static comparing(paramarg0: (param0: Object) => Object | null): (param0: Object | null, param1: Object | null) => number;
    static comparing(paramarg0: (param0: Object) => Object | null, paramarg1: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingDouble(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingInt(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingLong(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static naturalOrder(): (param0: Object | null, param1: Object | null) => number;
    static nullsFirst(paramarg0: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static nullsLast(paramarg0: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static reverseOrder(): (param0: Object | null, param1: Object | null) => number;
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
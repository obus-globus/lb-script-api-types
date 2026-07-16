import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class PreferFullCubeBlocks extends Object implements Comparator<ItemStack> {
    static INSTANCE: PreferFullCubeBlocks;
    static comparing<T extends unknown, U extends Comparable<Object>>(paramarg0: (param0: Object) => U): (param0: T, param1: T) => number;
    static comparing<T extends unknown, U extends unknown>(paramarg0: (param0: Object) => U, paramarg1: (param0: Object, param1: Object) => number): (param0: T, param1: T) => number;
    static comparingDouble<T extends unknown>(paramarg0: (param0: Object) => number): (param0: T, param1: T) => number;
    static comparingInt<T extends unknown>(paramarg0: (param0: Object) => number): (param0: T, param1: T) => number;
    static comparingLong<T extends unknown>(paramarg0: (param0: Object) => number): (param0: T, param1: T) => number;
    static naturalOrder<T extends Comparable<Object>>(): (param0: T, param1: T) => number;
    static nullsFirst<T extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: T, param1: T) => number;
    static nullsLast<T extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: T, param1: T) => number;
    static reverseOrder<T extends Comparable<Object>>(): (param0: T, param1: T) => number;
    compare(o1: ItemStack, o2: ItemStack): number;
    reversed(): (param0: ItemStack, param1: ItemStack) => number;
    thenComparing(arg0: (param0: ItemStack, param1: ItemStack) => number): (param0: ItemStack, param1: ItemStack) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: ItemStack) => U): (param0: ItemStack, param1: ItemStack) => number;
    thenComparing<U extends unknown>(arg0: (param0: ItemStack) => U, arg1: (param0: U, param1: U) => number): (param0: ItemStack, param1: ItemStack) => number;
    thenComparingDouble(arg0: (param0: ItemStack) => number): (param0: ItemStack, param1: ItemStack) => number;
    thenComparingInt(arg0: (param0: ItemStack) => number): (param0: ItemStack, param1: ItemStack) => number;
    thenComparingLong(arg0: (param0: ItemStack) => number): (param0: ItemStack, param1: ItemStack) => number;
}
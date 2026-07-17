import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class PreferFavourableBlocks extends Object implements Comparator<ItemStack> {
    static INSTANCE: PreferFavourableBlocks;
    compare(o1: ItemStack, o2: ItemStack): number;
    reversed(): (param0: ItemStack, param1: ItemStack) => number;
    thenComparing(arg0: (param0: ItemStack, param1: ItemStack) => number): (param0: ItemStack, param1: ItemStack) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: ItemStack) => U): (param0: ItemStack, param1: ItemStack) => number;
    thenComparing<U extends unknown>(arg0: (param0: ItemStack) => U, arg1: (param0: U, param1: U) => number): (param0: ItemStack, param1: ItemStack) => number;
    thenComparingDouble(arg0: (param0: ItemStack) => number): (param0: ItemStack, param1: ItemStack) => number;
    thenComparingInt(arg0: (param0: ItemStack) => number): (param0: ItemStack, param1: ItemStack) => number;
    thenComparingLong(arg0: (param0: ItemStack) => number): (param0: ItemStack, param1: ItemStack) => number;
}
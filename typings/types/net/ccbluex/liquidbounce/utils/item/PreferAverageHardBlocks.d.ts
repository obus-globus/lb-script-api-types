import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { PreferAverageHardBlocks$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/item/PreferAverageHardBlocks$Companion.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
/**
 * We want to place average hard blocks such as stone or wood. We don't want to use obsidian or leaves first
 * (high/low hardness).
 *
 * @param neutralRange if enabled, there is a range of hardness values which are accepted as *good*. If disabled we prefer the closest to the *ideal* hardness value.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemStackComparators.kt#L100 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemStackComparators.kt:100}
 */
export class PreferAverageHardBlocks extends Object implements Comparator<ItemStack> {
    static Companion: PreferAverageHardBlocks$Companion;
    constructor(neutralRange: boolean)
    // private neutralRange: boolean;
    compare(o1: ItemStack, o2: ItemStack): number;
    // private hardnessDist(stack: ItemStack): number;
    reversed(): (param0: ItemStack, param1: ItemStack) => number;
    thenComparing(arg0: (param0: ItemStack, param1: ItemStack) => number): (param0: ItemStack, param1: ItemStack) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: ItemStack) => U): (param0: ItemStack, param1: ItemStack) => number;
    thenComparing<U extends unknown>(arg0: (param0: ItemStack) => U, arg1: (param0: U, param1: U) => number): (param0: ItemStack, param1: ItemStack) => number;
    thenComparingDouble(arg0: (param0: ItemStack) => number): (param0: ItemStack, param1: ItemStack) => number;
    thenComparingInt(arg0: (param0: ItemStack) => number): (param0: ItemStack, param1: ItemStack) => number;
    thenComparingLong(arg0: (param0: ItemStack) => number): (param0: ItemStack, param1: ItemStack) => number;
}
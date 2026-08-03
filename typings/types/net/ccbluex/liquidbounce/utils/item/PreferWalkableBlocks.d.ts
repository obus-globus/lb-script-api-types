import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { ComparatorChain } from '../../../../../net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
/**
 * This predicate sorts blocks by
 * 1. least slipperiness
 * 2. nearest jump velocity modifier to 1.0
 * 3. nearest velocity jump modifier to 1.0
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemStackComparators.kt#L79 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemStackComparators.kt:79}
 */
export class PreferWalkableBlocks extends Object implements Comparator<ItemStack> {
    static INSTANCE: PreferWalkableBlocks;
    // private chain: ComparatorChain<Block>;
    compare(o1: ItemStack, o2: ItemStack): number;
    reversed(): (param0: ItemStack, param1: ItemStack) => number;
    thenComparing(arg0: (param0: ItemStack, param1: ItemStack) => number): (param0: ItemStack, param1: ItemStack) => number;
    thenComparing<U extends Comparable<U>>(arg0: (param0: ItemStack) => U): (param0: ItemStack, param1: ItemStack) => number;
    thenComparing<U extends unknown>(arg0: (param0: ItemStack) => U, arg1: (param0: U, param1: U) => number): (param0: ItemStack, param1: ItemStack) => number;
    thenComparingDouble(arg0: (param0: ItemStack) => number): (param0: ItemStack, param1: ItemStack) => number;
    thenComparingInt(arg0: (param0: ItemStack) => number): (param0: ItemStack, param1: ItemStack) => number;
    thenComparingLong(arg0: (param0: ItemStack) => number): (param0: ItemStack, param1: ItemStack) => number;
}
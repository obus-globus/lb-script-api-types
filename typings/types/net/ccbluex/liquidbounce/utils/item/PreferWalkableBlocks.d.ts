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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemStackComparators.kt#L79 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemStackComparators.kt:79}
 */
export class PreferWalkableBlocks extends Object implements Comparator<ItemStack> {
    static INSTANCE: PreferWalkableBlocks;
    static comparing(paramarg0: (param0: Object) => Object | null): (param0: Object | null, param1: Object | null) => number;
    static comparing(paramarg0: (param0: Object) => Object | null, paramarg1: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingDouble(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingInt(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static comparingLong(paramarg0: (param0: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static naturalOrder(): (param0: Object | null, param1: Object | null) => number;
    static nullsFirst(paramarg0: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static nullsLast(paramarg0: (param0: Object, param1: Object) => number): (param0: Object | null, param1: Object | null) => number;
    static reverseOrder(): (param0: Object | null, param1: Object | null) => number;
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
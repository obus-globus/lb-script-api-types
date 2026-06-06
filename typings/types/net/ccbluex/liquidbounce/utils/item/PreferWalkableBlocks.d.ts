import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { ToDoubleFunction } from '../../../../../java/util/function/ToDoubleFunction.d.ts'
import type { ToIntFunction } from '../../../../../java/util/function/ToIntFunction.d.ts'
import type { ToLongFunction } from '../../../../../java/util/function/ToLongFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ComparatorChain } from '../../../../../net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
/**
 * This predicate sorts blocks by
 * 1. least slipperiness
 * 2. nearest jump velocity modifier to 1.0
 * 3. nearest velocity jump modifier to 1.0
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemStackComparators.kt#L73 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemStackComparators.kt:73}
 */
export class PreferWalkableBlocks extends Object implements Comparator<ItemStack> {
    static INSTANCE: PreferWalkableBlocks;
    static comparing(paramarg0: (param0: Object | null) => Object | null): (param0: Object | null) => kotlin.Boolean;
    static comparing(paramarg0: (param0: Object | null) => Object | null, paramarg1: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingDouble(paramarg0: (param0: Object | null) => kotlin.Double): (param0: Object | null) => kotlin.Boolean;
    static comparingInt(paramarg0: (param0: Object | null) => kotlin.Int): (param0: Object | null) => kotlin.Boolean;
    static comparingLong(paramarg0: (param0: Object | null) => kotlin.Long): (param0: Object | null) => kotlin.Boolean;
    static naturalOrder(): (param0: Object | null) => kotlin.Boolean;
    static nullsFirst(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static nullsLast(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static reverseOrder(): (param0: Object | null) => kotlin.Boolean;
    // private chain: ComparatorChain<Block>;
    compare(o1: ItemStack, o2: ItemStack): number;
    reversed(): (param0: T) => kotlin.Boolean;
    thenComparing(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    thenComparing(arg0: (param0: T) => U): (param0: T) => kotlin.Boolean;
    thenComparing(arg0: (param0: T) => U, arg1: (param0: U) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    thenComparingDouble(arg0: (param0: T) => kotlin.Double): (param0: T) => kotlin.Boolean;
    thenComparingInt(arg0: (param0: T) => kotlin.Int): (param0: T) => kotlin.Boolean;
    thenComparingLong(arg0: (param0: T) => kotlin.Long): (param0: T) => kotlin.Boolean;
}
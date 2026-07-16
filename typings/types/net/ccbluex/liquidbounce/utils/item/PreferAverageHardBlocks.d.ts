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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemStackComparators.kt#L100 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/ItemStackComparators.kt:100}
 */
export class PreferAverageHardBlocks extends Object implements Comparator<ItemStack> {
    static Companion: PreferAverageHardBlocks$Companion;
    static comparing(paramarg0: (param0: Object) => Object | null): (param0: Object) => boolean;
    static comparing(paramarg0: (param0: Object) => Object | null, paramarg1: (param0: Object) => boolean): (param0: Object) => boolean;
    static comparingDouble(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static comparingInt(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static comparingLong(paramarg0: (param0: Object) => number): (param0: Object) => boolean;
    static naturalOrder(): (param0: Object) => boolean;
    static nullsFirst(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static nullsLast(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static reverseOrder(): (param0: Object) => boolean;
    constructor(neutralRange: boolean)
    // private neutralRange: boolean;
    compare(o1: ItemStack, o2: ItemStack): number;
    // private hardnessDist(stack: ItemStack): number;
    reversed(): (param0: Object) => boolean;
    thenComparing(arg0: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparing<U extends Comparable<U>>(arg0: (param0: ItemStack) => U): (param0: Object) => boolean;
    thenComparing<U extends unknown>(arg0: (param0: ItemStack) => U, arg1: (param0: Object) => boolean): (param0: Object) => boolean;
    thenComparingDouble(arg0: (param0: ItemStack) => number): (param0: Object) => boolean;
    thenComparingInt(arg0: (param0: ItemStack) => number): (param0: Object) => boolean;
    thenComparingLong(arg0: (param0: ItemStack) => number): (param0: Object) => boolean;
}
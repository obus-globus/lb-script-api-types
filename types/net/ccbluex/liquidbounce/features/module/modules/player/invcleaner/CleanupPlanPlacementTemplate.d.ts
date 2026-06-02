import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { ItemConstraintInfo } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemConstraintInfo.d.ts'
import type { ItemSortChoice } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemSortChoice.d.ts'
import type { ItemFacet } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet.d.ts'
import type { ItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
export class CleanupPlanPlacementTemplate extends Object {
    constructor(slotContentMap: Map<ItemSlot, ItemSortChoice>, itemAmountConstraintProvider: Function1<ItemFacet, ItemConstraintInfo[]>, isGreedy: boolean, forbiddenSlots: ItemSlot[], forbiddenSlotsToFill: ItemSlot[])
    readonly forbiddenSlots: ItemSlot[];
    readonly forbiddenSlotsToFill: ItemSlot[];
    // private isGreedy: boolean;
    /**
     * If false, slots which also contains items of that category, those items are not replaced with other items.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/CleanupPlanGenerator.kt#L164 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/CleanupPlanGenerator.kt:164}
     */
    /*not mapped: */ isGreedy(): boolean;
    /**
     * A function which provides constraint groups for each item category and the number which the item counts against
     * the given constraint. More info on how constraints work at {@link ItemNumberConstraintGroup}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/CleanupPlanGenerator.kt#L159 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/CleanupPlanGenerator.kt:159}
     */
    readonly itemAmountConstraintProvider: (param0: ItemFacet) => ItemConstraintInfo[];
    /**
     * Contains requests for each slot (e.g. Slot 1 -> SWORD, Slot 8 -> BLOCK, etc.)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/CleanupPlanGenerator.kt#L155 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/CleanupPlanGenerator.kt:155}
     */
    readonly slotContentMap: Map<ItemSlot, ItemSortChoice>;
}
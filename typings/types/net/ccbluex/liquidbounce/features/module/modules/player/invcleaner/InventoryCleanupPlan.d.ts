import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { InventorySwap } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/InventorySwap.d.ts'
import type { ItemAndComponents } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemAndComponents.d.ts'
import type { ItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
export class InventoryCleanupPlan extends Object {
    constructor(usefulItems: ItemSlot[], swaps: InventorySwap[], mergeableItems: Map<ItemAndComponents, ItemSlot[]>)
    readonly mergeableItems: Map<ItemAndComponents, ItemSlot[]>;
    readonly swaps: InventorySwap[];
    readonly usefulItems: ItemSlot[];
    findItemsToThrowOut(itemSlots: ItemSlot[]): ItemSlot[];
    /**
     * Find all item stack ids which should be double-clicked in order to merge them
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/CleanupPlan.kt#L97 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/CleanupPlan.kt:97}
     */
    findSlotsToMerge(): ItemSlot[];
    /**
     * Replaces the slot from key to value
     *
     * This method modifies all members.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/CleanupPlan.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/CleanupPlan.kt:60}
     */
    remapSlots(slotMap: Map<ItemSlot, ItemSlot>): void;
}
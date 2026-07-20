import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { InventorySwap } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/InventorySwap.d.ts'
import type { ItemAndComponents } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemAndComponents.d.ts'
import type { ItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
export class InventoryCleanupPlan extends Object {
    constructor(usefulItems: ItemSlot[], swaps: InventorySwap[], mergeableItems: JavaMap<ItemAndComponents, ItemSlot[]>)
    readonly mergeableItems: JavaMap<ItemAndComponents, ItemSlot[]>;
    readonly swaps: InventorySwap[];
    readonly usefulItems: ItemSlot[];
    findItemsToThrowOut(itemSlots: ItemSlot[]): ItemSlot[];
    /**
     * Find all item stack ids which should be double-clicked in order to merge them
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/CleanupPlan.kt#L100 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/CleanupPlan.kt:100}
     */
    findSlotsToMerge(): ItemSlot[];
    /**
     * Replaces the slot from key to value
     *
     * This method modifies all members.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/CleanupPlan.kt#L65 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/CleanupPlan.kt:65}
     */
    remapSlots(slotMap: JavaMap<ItemSlot, ItemSlot>): void;
}
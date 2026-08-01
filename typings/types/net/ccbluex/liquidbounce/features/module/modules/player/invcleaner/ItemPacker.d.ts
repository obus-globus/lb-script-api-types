import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../../java/util/Iterator.d.ts'
import type { InventorySwap } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/InventorySwap.d.ts'
import type { ItemPacker$ItemAmountConstraintProvider } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemPacker$ItemAmountConstraintProvider.d.ts'
import type { ItemFacet } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet.d.ts'
import type { ItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
/**
 * After discovery phase (find all items, group them by their type, sort them by usefulness), this class tries to fit
 * the given requirements (max blocks, required stack cound, etc.) and packs the given items in their target slots.
 *
 * Items that were deemed useful can be found in {@link usefulItems}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemPacker.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemPacker.kt:34}
 */
export class ItemPacker extends Object {
    constructor()
    // private alreadyAllocatedItems: ItemSlot[];
    /**
     * If an item is used by a move, it will be in this list.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemPacker.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemPacker.kt:44}
     */
    readonly usefulItems: ItemSlot[];
    // private fillItemIntoSlot(filledInItemSlot: ItemSlot, leftTargetSlotsToFill: Iterator<ItemSlot>): ItemSlot | null;
    /**
     * Takes items from the {@link itemsToFillIn} list until it has collected {@link maxItemCount} items and {@link requiredStackCount}
     * stacks. The items are marked as useful and fill in hotbar slots if there are still slots to fill.
     *
     * @returns returns the item moves (aka "swaps") that should be executed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemPacker.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemPacker.kt:52}
     */
    packItems(itemsToFillIn: ItemFacet[], hotbarSlotsToFill: ItemSlot[] | null, forbiddenSlots: ItemSlot[], forbiddenSlotsToFill: ItemSlot[], constraintProvider: ItemPacker$ItemAmountConstraintProvider): InventorySwap[];
}
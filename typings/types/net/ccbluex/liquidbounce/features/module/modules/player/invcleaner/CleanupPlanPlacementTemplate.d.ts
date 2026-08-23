import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ItemConstraintInfo } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemConstraintInfo.d.ts'
import type { ItemSortChoice } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemSortChoice.d.ts'
import type { ItemFacet } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet.d.ts'
import type { ItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { Item } from '../../../../../../../../net/minecraft/world/item/Item.d.ts'
export class CleanupPlanPlacementTemplate extends Object {
    constructor(slotContentMap: JavaMap<ItemSlot, ItemSortChoice>, itemAmountConstraintProvider: (param0: ItemFacet) => ItemConstraintInfo[], itemBlacklist: Item[], isGreedy: boolean, forbiddenSlots: ItemSlot[], forbiddenSlotsToFill: ItemSlot[])
    readonly forbiddenSlots: ItemSlot[];
    readonly forbiddenSlotsToFill: ItemSlot[];
    // private isGreedy: boolean;
    /**
     * If false, slots which also contains items of that category, those items are not replaced with other items.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/CleanupPlanGenerator.kt#L173 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/CleanupPlanGenerator.kt:173}
     */
    /*not mapped: */ isGreedy(): boolean;
    /**
     * A function which provides constraint groups for each item category and the number which the item counts against
     * the given constraint. More info on how constraints work at {@link ItemNumberConstraintGroup}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/CleanupPlanGenerator.kt#L168 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/CleanupPlanGenerator.kt:168}
     */
    readonly itemAmountConstraintProvider: (param0: ItemFacet) => ItemConstraintInfo[];
    readonly itemBlacklist: Item[];
    /**
     * Contains requests for each slot (e.g. Slot 1 -> SWORD, Slot 8 -> BLOCK, etc.)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/CleanupPlanGenerator.kt#L163 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/CleanupPlanGenerator.kt:163}
     */
    readonly slotContentMap: JavaMap<ItemSlot, ItemSortChoice>;
}
import type { ObjectIntPair } from '../../../../../../../../../it/unimi/dsi/fastutil/objects/ObjectIntPair.d.ts'
import type { ItemCategory } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemCategory.d.ts'
import type { ItemFunction } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemFunction.d.ts'
import type { FoodItemFacet$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/FoodItemFacet$Companion.d.ts'
import type { ItemFacet } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet.d.ts'
import type { ItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
export class FoodItemFacet extends ItemFacet {
    static Companion: FoodItemFacet$Companion;
    constructor(itemSlot: ItemSlot)
    readonly category: ItemCategory;
    readonly providedItemFunctions: ObjectIntPair<ItemFunction>[];
    compareTo(other: ItemFacet): number;
}
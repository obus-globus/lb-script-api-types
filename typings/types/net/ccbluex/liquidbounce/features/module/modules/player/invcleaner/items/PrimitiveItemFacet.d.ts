import type { ItemCategory } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemCategory.d.ts'
import type { ItemFacet } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet.d.ts'
import type { PrimitiveItemFacet$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/PrimitiveItemFacet$Companion.d.ts'
import type { ItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
export class PrimitiveItemFacet extends ItemFacet {
    static Companion: PrimitiveItemFacet$Companion;
    constructor(itemSlot: ItemSlot, category: ItemCategory, worth: number)
    readonly category: ItemCategory;
    readonly worth: number;
    compareTo(other: ItemFacet): number;
}
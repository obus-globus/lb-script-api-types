import type { ItemCategory } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemCategory.d.ts'
import type { ArrowItemFacet$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ArrowItemFacet$Companion.d.ts'
import type { ItemFacet } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet.d.ts'
import type { ItemFacet$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet$Companion.d.ts'
import type { ItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
export class ArrowItemFacet extends ItemFacet {
    static Companion: ArrowItemFacet$Companion;
    static Companion: ItemFacet$Companion;
    constructor(itemSlot: ItemSlot)
    readonly category: ItemCategory;
    compareTo(other: ItemFacet): number;
}
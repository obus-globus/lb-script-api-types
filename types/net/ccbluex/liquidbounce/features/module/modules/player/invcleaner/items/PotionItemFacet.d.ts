import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ItemCategory } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemCategory.d.ts'
import type { ItemFacet } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet.d.ts'
import type { ItemFacet$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet$Companion.d.ts'
import type { PotionItemFacet$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/PotionItemFacet$Companion.d.ts'
import type { ItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
export class PotionItemFacet extends ItemFacet {
    static BAD_STATUS_EFFECTS: (Object | null)[];
    static Companion: ItemFacet$Companion;
    static Companion: PotionItemFacet$Companion;
    static GOOD_STATUS_EFFECTS: (Object | null)[];
    constructor(itemSlot: ItemSlot)
    readonly category: ItemCategory;
    compareTo(other: ItemFacet): number;
}
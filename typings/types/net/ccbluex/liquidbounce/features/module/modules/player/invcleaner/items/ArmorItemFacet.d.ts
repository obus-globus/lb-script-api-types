import type { ItemCategory } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemCategory.d.ts'
import type { ItemFacet } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet.d.ts'
import type { ItemFacet$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet$Companion.d.ts'
import type { ItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { ArmorComparator } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/item/armor/ArmorComparator.d.ts'
import type { ArmorPiece } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/item/armor/ArmorPiece.d.ts'
/**
 * @param stacksToKeep armor items which should be kept since they might be strong in future situations
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ArmorItemFacet.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ArmorItemFacet.kt:30}
 */
export class ArmorItemFacet extends ItemFacet {
    static Companion: ItemFacet$Companion;
    constructor(itemSlot: ItemSlot, stacksToKeep: ItemSlot[], armorComparator: ArmorComparator)
    // private armorComparator: ArmorComparator;
    // private armorPiece: ArmorPiece;
    readonly category: ItemCategory;
    // private stacksToKeep: ItemSlot[];
    compareTo(other: ItemFacet): number;
    shouldKeep(): boolean;
}
import type { ItemCategory } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemCategory.d.ts'
import type { ItemFacet } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet.d.ts'
import type { ItemFacet$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet$Companion.d.ts'
import type { ItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { ArmorComparator } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/item/armor/ArmorComparator.d.ts'
import type { ArmorPiece } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/item/armor/ArmorPiece.d.ts'
/**
 * @param stacksToKeep armor items which should be kept since they might be strong in future situations
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ArmorItemFacet.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ArmorItemFacet.kt:27}
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
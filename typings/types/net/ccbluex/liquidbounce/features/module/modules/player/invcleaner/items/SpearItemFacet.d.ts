import type { ItemCategory } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemCategory.d.ts'
import type { SpearItemFacet$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/SpearItemFacet$Companion.d.ts'
import type { WeaponItemFacet } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/WeaponItemFacet.d.ts'
import type { ItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
/**
 * Specialization of weapon type. Used in order to allow the user to specify that they want a sword and not an axe
 * or something.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/SpearItemFacet.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/SpearItemFacet.kt:35}
 */
export class SpearItemFacet extends WeaponItemFacet {
    static Companion: SpearItemFacet$Companion;
    constructor(itemSlot: ItemSlot)
    readonly category: ItemCategory;
}
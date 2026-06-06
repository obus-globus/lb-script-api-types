import type { ItemCategory } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemCategory.d.ts'
import type { ItemFacet$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet$Companion.d.ts'
import type { SpearItemFacet$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/SpearItemFacet$Companion.d.ts'
import type { WeaponItemFacet } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/WeaponItemFacet.d.ts'
import type { WeaponItemFacet$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/WeaponItemFacet$Companion.d.ts'
import type { ItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
/**
 * Specialization of weapon type. Used in order to allow the user to specify that they want a sword and not an axe
 * or something.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/SpearItemFacet.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/SpearItemFacet.kt:31}
 */
export class SpearItemFacet extends WeaponItemFacet {
    static Companion: ItemFacet$Companion;
    static Companion: SpearItemFacet$Companion;
    static Companion: WeaponItemFacet$Companion;
    constructor(itemSlot: ItemSlot)
    readonly category: ItemCategory;
}
import type { ItemCategory } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemCategory.d.ts'
import type { ItemFacet$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet$Companion.d.ts'
import type { WeaponItemFacet } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/WeaponItemFacet.d.ts'
import type { WeaponItemFacet$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/WeaponItemFacet$Companion.d.ts'
import type { ItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
/**
 * Specialization of weapon type. Used in order to allow the user to specify that they want a sword and not an axe
 * or something.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/SwordItemFacet.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/SwordItemFacet.kt:30}
 */
export class SwordItemFacet extends WeaponItemFacet {
    static Companion: ItemFacet$Companion;
    static Companion: WeaponItemFacet$Companion;
    constructor(itemSlot: ItemSlot)
    readonly category: ItemCategory;
}
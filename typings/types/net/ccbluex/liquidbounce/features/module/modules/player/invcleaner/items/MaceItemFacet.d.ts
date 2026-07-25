import type { ItemCategory } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemCategory.d.ts'
import type { ItemFacet } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet.d.ts'
import type { MaceItemFacet$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/MaceItemFacet$Companion.d.ts'
import type { WeaponItemFacet } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/WeaponItemFacet.d.ts'
import type { ItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
/**
 * Specialization of weapon type. Used in order to allow the user to specify that they want a mace and not an axe
 * or something.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cf742eb17a33041e582f6f30822aab3e8450edf8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/MaceItemFacet.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/MaceItemFacet.kt:39}
 */
export class MaceItemFacet extends WeaponItemFacet {
    static ASSUMED_FALL_DISTANCE: number;
    static Companion: MaceItemFacet$Companion;
    /**
     * `0.85.pow(1 / 20.0)`
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cf742eb17a33041e582f6f30822aab3e8450edf8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/MaceItemFacet.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/MaceItemFacet.kt:44}
     */
    static P: number;
    constructor(itemSlot: ItemSlot)
    readonly category: ItemCategory;
    compareTo(other: ItemFacet): number;
}
import type { ItemFacet$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet$Companion.d.ts'
import type { WeaponItemFacet } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/WeaponItemFacet.d.ts'
import type { ItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
/**
 * Axe with sharpness level >= 5
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/SharpAxeFacet.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/SharpAxeFacet.kt:27}
 */
export class SharpAxeFacet extends WeaponItemFacet {
    static Companion: ItemFacet$Companion;
    constructor(slot: ItemSlot)
    shouldKeep(): boolean;
}
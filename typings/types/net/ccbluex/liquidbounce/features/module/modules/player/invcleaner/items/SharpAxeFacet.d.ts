import type { ItemFacet$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet$Companion.d.ts'
import type { WeaponItemFacet } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/WeaponItemFacet.d.ts'
import type { ItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
/**
 * Axe with sharpness level >= 5
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/SharpAxeFacet.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/SharpAxeFacet.kt:27}
 */
export class SharpAxeFacet extends WeaponItemFacet {
    static Companion: ItemFacet$Companion;
    constructor(slot: ItemSlot)
    shouldKeep(): boolean;
}
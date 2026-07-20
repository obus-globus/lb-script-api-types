import type { ItemFacet } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet.d.ts'
import type { ItemFacet$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet$Companion.d.ts'
import type { ItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
/**
 * Axe with sharpness level >= 100
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/GodAxeFacet.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/GodAxeFacet.kt:27}
 */
export class GodAxeFacet extends ItemFacet {
    static Companion: ItemFacet$Companion;
    constructor(slot: ItemSlot)
    shouldKeep(): boolean;
}
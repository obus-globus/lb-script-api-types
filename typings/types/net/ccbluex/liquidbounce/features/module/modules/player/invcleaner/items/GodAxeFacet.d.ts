import type { ItemFacet } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet.d.ts'
import type { ItemFacet$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/ItemFacet$Companion.d.ts'
import type { ItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
/**
 * Axe with sharpness level >= 100
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/GodAxeFacet.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/items/GodAxeFacet.kt:27}
 */
export class GodAxeFacet extends ItemFacet {
    static Companion: ItemFacet$Companion;
    constructor(slot: ItemSlot)
    shouldKeep(): boolean;
}
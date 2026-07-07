import type { Object } from '../../../../java/lang/Object.d.ts'
export interface InventoryAddition extends Object{
    /**
     * @returns the actual selected slot without any modification by {@link net.ccbluex.liquidbounce.utils.client.SilentHotbar}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/additions/InventoryAddition.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/additions/InventoryAddition.kt:30}
     */
    liquid_bounce$getRealSelectedSlot(): number;
}
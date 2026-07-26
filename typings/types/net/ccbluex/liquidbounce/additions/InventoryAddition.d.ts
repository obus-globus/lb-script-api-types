import type { Object } from '../../../../java/lang/Object.d.ts'
export interface InventoryAddition extends Object{
    /**
     * @returns the actual selected slot without any modification by {@link net.ccbluex.liquidbounce.utils.client.SilentHotbar}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/21564b1e592881f9ec5cd94857232312a84039b2/src/main/kotlin/net/ccbluex/liquidbounce/additions/InventoryAddition.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/additions/InventoryAddition.kt:30}
     */
    liquid_bounce$getRealSelectedSlot(): number;
}
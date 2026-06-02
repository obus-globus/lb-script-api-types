import type { Object } from '../../../../java/lang/Object.d.ts'
export interface InventoryAddition extends Object{
    /**
     * @returns the actual selected slot without any modification by {@link net.ccbluex.liquidbounce.utils.client.SilentHotbar}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/additions/InventoryAddition.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/additions/InventoryAddition.kt:27}
     */
    liquid_bounce$getRealSelectedSlot(): number;
}
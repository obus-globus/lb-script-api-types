import type { Object } from '../../../../java/lang/Object.d.ts'
export interface InventoryAddition extends Object{
    /**
     * @returns the actual selected slot without any modification by {@link net.ccbluex.liquidbounce.utils.client.SilentHotbar}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/additions/InventoryAddition.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/additions/InventoryAddition.kt:27}
     */
    liquid_bounce$getRealSelectedSlot(): number;
}
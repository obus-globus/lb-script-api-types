import type { Object } from '../../../../java/lang/Object.d.ts'
export interface InventoryAddition extends Object{
    /**
     * @returns the actual selected slot without any modification by {@link net.ccbluex.liquidbounce.utils.client.SilentHotbar}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/additions/InventoryAddition.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/additions/InventoryAddition.kt:30}
     */
    liquid_bounce$getRealSelectedSlot(): number;
}
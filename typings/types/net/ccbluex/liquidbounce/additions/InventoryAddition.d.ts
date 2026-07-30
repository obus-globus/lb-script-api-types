import type { Object } from '../../../../java/lang/Object.d.ts'
export interface InventoryAddition extends Object{
    /**
     * @returns the actual selected slot without any modification by {@link net.ccbluex.liquidbounce.utils.client.SilentHotbar}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/additions/InventoryAddition.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/additions/InventoryAddition.kt:30}
     */
    liquid_bounce$getRealSelectedSlot(): number;
}
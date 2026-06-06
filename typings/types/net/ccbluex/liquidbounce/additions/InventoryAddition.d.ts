import type { Object } from '../../../../java/lang/Object.d.ts'
export interface InventoryAddition extends Object{
    /**
     * @returns the actual selected slot without any modification by {@link net.ccbluex.liquidbounce.utils.client.SilentHotbar}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/additions/InventoryAddition.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/additions/InventoryAddition.kt:27}
     */
    liquid_bounce$getRealSelectedSlot(): number;
}
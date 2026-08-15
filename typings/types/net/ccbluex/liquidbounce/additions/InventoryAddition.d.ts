import type { Object } from '../../../../java/lang/Object.d.ts'
export interface InventoryAddition extends Object{
    /**
     * @returns the actual selected slot without any modification by {@link net.ccbluex.liquidbounce.utils.client.SilentHotbar}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/additions/InventoryAddition.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/additions/InventoryAddition.kt:30}
     */
    liquid_bounce$getRealSelectedSlot(): number;
}
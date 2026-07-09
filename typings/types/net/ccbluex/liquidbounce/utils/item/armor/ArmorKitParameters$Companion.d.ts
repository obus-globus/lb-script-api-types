import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ArmorKitParameters } from '../../../../../../net/ccbluex/liquidbounce/utils/item/armor/ArmorKitParameters.d.ts'
import type { ArmorPiece } from '../../../../../../net/ccbluex/liquidbounce/utils/item/armor/ArmorPiece.d.ts'
import type { EquipmentSlot } from '../../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
export class ArmorKitParameters$Companion extends Object {
    /**
     * Returns for each slot the summed up armor parameters without that slot.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/armor/ArmorComparator.kt#L56 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/armor/ArmorComparator.kt:56}
     */
    getParametersForSlots(currentKit: { [key in EquipmentSlot]: ArmorPiece | null }): ArmorKitParameters;
}
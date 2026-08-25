import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ArmorKitParameters } from '../../../../../../net/ccbluex/liquidbounce/utils/item/armor/ArmorKitParameters.d.ts'
import type { ArmorPiece } from '../../../../../../net/ccbluex/liquidbounce/utils/item/armor/ArmorPiece.d.ts'
import type { EquipmentSlot } from '../../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
export class ArmorKitParameters$Companion extends Object {
    /**
     * Returns for each slot the summed up armor parameters without that slot.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/armor/ArmorComparator.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/armor/ArmorComparator.kt:55}
     */
    getParametersForSlots(currentKit: JavaMap<EquipmentSlot, ArmorPiece | null>): ArmorKitParameters;
}
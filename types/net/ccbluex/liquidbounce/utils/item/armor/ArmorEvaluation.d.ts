import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ItemSlot } from '../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { ArmorComparator } from '../../../../../../net/ccbluex/liquidbounce/utils/item/armor/ArmorComparator.d.ts'
import type { ArmorKitParameters } from '../../../../../../net/ccbluex/liquidbounce/utils/item/armor/ArmorKitParameters.d.ts'
import type { ArmorPiece } from '../../../../../../net/ccbluex/liquidbounce/utils/item/armor/ArmorPiece.d.ts'
import type { EquipmentSlot } from '../../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
export class ArmorEvaluation extends Object {
    static INSTANCE: ArmorEvaluation;
    // private EXPECTED_DAMAGE: number;
    findBestArmorPieces(slots: ItemSlot[], durabilityThreshold: number): { [key in EquipmentSlot]: ArmorPiece | null };
    findBestArmorPiecesWithComparator(slots: ItemSlot[], comparator: ArmorComparator): { [key in EquipmentSlot]: ArmorPiece | null };
    getArmorComparatorFor(currentKit: { [key in EquipmentSlot]: ArmorPiece | null }, durabilityThreshold: number): ArmorComparator;
    getArmorComparatorForParameters(currentParameters: ArmorKitParameters, durabilityThreshold: number): ArmorComparator;
    // private groupArmorByType(slots: ItemSlot[]): { [key in EquipmentSlot]: ArmorPiece[] };
}
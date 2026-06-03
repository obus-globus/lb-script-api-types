import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ArmorKitParameters$Companion } from '../../../../../../net/ccbluex/liquidbounce/utils/item/armor/ArmorKitParameters$Companion.d.ts'
import type { ArmorParameter } from '../../../../../../net/ccbluex/liquidbounce/utils/item/armor/ArmorParameter.d.ts'
import type { ArmorPiece } from '../../../../../../net/ccbluex/liquidbounce/utils/item/armor/ArmorPiece.d.ts'
import type { EquipmentSlot } from '../../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
export class ArmorKitParameters extends Object {
    static Companion: ArmorKitParameters$Companion;
// (invalid TS: name contains '-')     static box-impl(paramarg0: Map<Object | null, Object | null>): ArmorKitParameters;
// (invalid TS: name contains '-')     static equals-impl(paramarg0: { [key in EquipmentSlot]: Object | null }, paramarg1: Object): boolean;
// (invalid TS: name contains '-')     static equals-impl0(paramarg0: { [key in EquipmentSlot]: Object | null }, paramarg1: { [key in EquipmentSlot]: Object | null }): boolean;
// (invalid TS: name contains '-')     static getParametersForSlot-impl(paramarg0: { [key in EquipmentSlot]: Object | null }, paramarg1: EquipmentSlot): ArmorParameter;
// (invalid TS: name contains '-')     static getParametersForSlots-2jqCzd0(paramarg0: { [key in EquipmentSlot]: ArmorPiece }): { [key in EquipmentSlot]: Object | null };
// (invalid TS: name contains '-')     static hashCode-impl(paramarg0: { [key in EquipmentSlot]: Object | null }): number;
// (invalid TS: name contains '-')     static toString-impl(paramarg0: { [key in EquipmentSlot]: Object | null }): string;
    private constructor(slots: { [key in EquipmentSlot]: ArmorParameter })
    // private slots: { [key in EquipmentSlot]: ArmorParameter };
    equals(other: Object | null): boolean;
    getParametersForSlot(slotType: EquipmentSlot): ArmorParameter;
    hashCode(): number;
    toString(): string;
}
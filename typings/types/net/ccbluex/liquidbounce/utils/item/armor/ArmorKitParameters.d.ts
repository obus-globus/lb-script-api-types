import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ArmorKitParameters$Companion } from '../../../../../../net/ccbluex/liquidbounce/utils/item/armor/ArmorKitParameters$Companion.d.ts'
import type { ArmorParameter } from '../../../../../../net/ccbluex/liquidbounce/utils/item/armor/ArmorParameter.d.ts'
import type { ArmorPiece } from '../../../../../../net/ccbluex/liquidbounce/utils/item/armor/ArmorPiece.d.ts'
import type { EquipmentSlot } from '../../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
export class ArmorKitParameters extends Object {
    static Companion: ArmorKitParameters$Companion;
// (invalid TS: name contains '-')     static box-impl(paramarg0: Map<Object | null, Object | null>): ArmorKitParameters;
// (invalid TS: name contains '-')     static equals-impl(paramarg0: Map<EquipmentSlot, ArmorParameter>, paramarg1: Object): boolean;
// (invalid TS: name contains '-')     static equals-impl0(paramarg0: Map<EquipmentSlot, ArmorParameter>, paramarg1: Map<EquipmentSlot, ArmorParameter>): boolean;
// (invalid TS: name contains '-')     static getParametersForSlot-impl(paramarg0: Map<EquipmentSlot, ArmorParameter>, paramarg1: EquipmentSlot): ArmorParameter;
// (invalid TS: name contains '-')     static getParametersForSlots-2jqCzd0(paramarg0: Map<EquipmentSlot, ArmorPiece>): Map<EquipmentSlot, ArmorParameter>;
// (invalid TS: name contains '-')     static hashCode-impl(paramarg0: Map<EquipmentSlot, ArmorParameter>): number;
// (invalid TS: name contains '-')     static toString-impl(paramarg0: Map<EquipmentSlot, ArmorParameter>): string;
    private constructor(slots: Map<EquipmentSlot, ArmorParameter>)
    // private slots: Map<EquipmentSlot, ArmorParameter>;
    equals(other: Object | null): boolean;
    getParametersForSlot(slotType: EquipmentSlot): ArmorParameter;
    hashCode(): number;
    toString(): string;
}
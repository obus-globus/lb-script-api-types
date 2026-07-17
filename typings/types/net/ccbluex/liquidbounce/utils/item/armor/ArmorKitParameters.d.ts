import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ArmorKitParameters$Companion } from '../../../../../../net/ccbluex/liquidbounce/utils/item/armor/ArmorKitParameters$Companion.d.ts'
import type { ArmorParameter } from '../../../../../../net/ccbluex/liquidbounce/utils/item/armor/ArmorParameter.d.ts'
import type { ArmorPiece } from '../../../../../../net/ccbluex/liquidbounce/utils/item/armor/ArmorPiece.d.ts'
import type { EquipmentSlot } from '../../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
export class ArmorKitParameters extends Object {
    static Companion: ArmorKitParameters$Companion;
// (invalid TS: name contains '-')     static box-impl(paramarg0: JavaMap<Object | null, Object | null>): ArmorKitParameters;
// (invalid TS: name contains '-')     static equals-impl(other: Object | null): boolean;
// (invalid TS: name contains '-')     static equals-impl0(paramarg0: JavaMap<EquipmentSlot, ArmorParameter>, paramarg1: JavaMap<EquipmentSlot, ArmorParameter>): boolean;
// (invalid TS: name contains '-')     static getParametersForSlot-impl(slotType: EquipmentSlot): ArmorParameter;
// (invalid TS: name contains '-')     static getParametersForSlots-2jqCzd0(currentKit: JavaMap<EquipmentSlot, ArmorPiece | null>): ArmorKitParameters;
// (invalid TS: name contains '-')     static hashCode-impl(): number;
// (invalid TS: name contains '-')     static toString-impl(): string;
    private constructor(slots: JavaMap<EquipmentSlot, ArmorParameter>)
    // private slots: JavaMap<EquipmentSlot, ArmorParameter>;
    equals(other: Object | null): boolean;
    getParametersForSlot(slotType: EquipmentSlot): ArmorParameter;
    hashCode(): number;
    toString(): string;
}
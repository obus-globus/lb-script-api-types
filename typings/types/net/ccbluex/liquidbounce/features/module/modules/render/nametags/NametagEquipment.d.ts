import type { ValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { NametagRenderState$Equipments } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/nametags/NametagRenderState$Equipments.d.ts'
import type { EquipmentSlotChoice } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/EquipmentSlotChoice.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class NametagEquipment extends ValueGroup {
    static INSTANCE: NametagEquipment;
    readonly showInfo: boolean;
    // private skipEmptySlot: boolean;
    // private /*not mapped: */ getSkipEmptySlot(): boolean;
    // private slots: EquipmentSlotChoice[];
    // private /*not mapped: */ getSlots(): EquipmentSlotChoice[];
    update(entity: LivingEntity, equipments: NametagRenderState$Equipments): void;
}
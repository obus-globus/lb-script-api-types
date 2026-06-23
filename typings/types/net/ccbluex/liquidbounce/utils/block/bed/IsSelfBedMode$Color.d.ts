import type { ModeValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { IsSelfBedMode } from '../../../../../../net/ccbluex/liquidbounce/utils/block/bed/IsSelfBedMode.d.ts'
import type { EquipmentSlotChoice } from '../../../../../../net/ccbluex/liquidbounce/utils/inventory/EquipmentSlotChoice.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BedBlock } from '../../../../../../net/minecraft/world/level/block/BedBlock.d.ts'
export class IsSelfBedMode$Color extends IsSelfBedMode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>)
    // private loose: boolean;
    // private /*not mapped: */ getLoose(): boolean;
    // private slots: EquipmentSlotChoice[];
    // private /*not mapped: */ getSlots(): EquipmentSlotChoice[];
    isSelfBed(block: BedBlock, pos: BlockPos): boolean;
}
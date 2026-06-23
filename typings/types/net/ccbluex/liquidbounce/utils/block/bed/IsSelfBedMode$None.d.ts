import type { ModeValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { IsSelfBedMode } from '../../../../../../net/ccbluex/liquidbounce/utils/block/bed/IsSelfBedMode.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BedBlock } from '../../../../../../net/minecraft/world/level/block/BedBlock.d.ts'
export class IsSelfBedMode$None extends IsSelfBedMode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>)
    isSelfBed(block: BedBlock, pos: BlockPos): boolean;
    shouldDefend(block: BedBlock, pos: BlockPos): boolean;
}
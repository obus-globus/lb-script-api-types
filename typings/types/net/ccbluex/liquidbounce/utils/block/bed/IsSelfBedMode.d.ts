import type { Mode } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BedBlock } from '../../../../../../net/minecraft/world/level/block/BedBlock.d.ts'
export class IsSelfBedMode extends Mode {
    static Companion: Tagged$Companion;
    protected constructor(name: string, parent: ModeValueGroup<any>)
    readonly parent: ModeValueGroup<any>;
    isSelfBed(block: BedBlock, pos: BlockPos): boolean;
    shouldDefend(block: BedBlock, pos: BlockPos): boolean;
}
import type { Mode } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { MinecraftShortcuts } from '../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { Rotation } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { BlockPlacer } from '../../../../../../net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.d.ts'
import type { BlockPlacementTarget } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/BlockPlacementTarget.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
export abstract class BlockPlacerRotationMode extends Mode implements MinecraftShortcuts {
    static Companion: Tagged$Companion;
    constructor(name: string, modeValueGroup: ModeValueGroup<BlockPlacerRotationMode>, placer: BlockPlacer)
    // private modeValueGroup: ModeValueGroup<BlockPlacerRotationMode>;
    readonly parent: ModeValueGroup<any>;
    readonly placer: BlockPlacer;
    readonly postMove: boolean;
    getVerificationRotation(targetedRotation: Rotation): Rotation;
    invoke(isSupport: boolean, pos: BlockPos, placementTarget: BlockPlacementTarget): boolean;
    onTickStart(): void;
}
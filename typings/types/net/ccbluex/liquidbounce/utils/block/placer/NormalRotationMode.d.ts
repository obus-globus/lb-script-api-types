import type { ModeValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { RotationsValueGroup } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
import type { Rotation } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { BlockPlacer } from '../../../../../../net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.d.ts'
import type { BlockPlacerRotationMode } from '../../../../../../net/ccbluex/liquidbounce/utils/block/placer/BlockPlacerRotationMode.d.ts'
import type { BlockPlacementTarget } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/BlockPlacementTarget.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
/**
 * Normal rotations.
 * Only one placement per tick is possible, possible less because rotating takes some time.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacerRotationModes.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/BlockPlacerRotationModes.kt:60}
 */
export class NormalRotationMode extends BlockPlacerRotationMode {
    static Companion: Tagged$Companion;
    constructor(modeValueGroup: ModeValueGroup<BlockPlacerRotationMode>, placer: BlockPlacer)
    readonly rotations: RotationsValueGroup;
    getVerificationRotation(targetedRotation: Rotation): Rotation;
    invoke(isSupport: boolean, pos: BlockPos, placementTarget: BlockPlacementTarget): boolean;
}
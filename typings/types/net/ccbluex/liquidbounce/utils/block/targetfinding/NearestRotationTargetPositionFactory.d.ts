import type { FaceTargetPositionFactory } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/FaceTargetPositionFactory.d.ts'
import type { PositionFactoryConfiguration } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/PositionFactoryConfiguration.d.ts'
import type { AlignedFace } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/AlignedFace.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Always targets the point with the nearest rotation angle to the current rotation angle
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/FaceTargetPositionFactory.kt#L107 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/FaceTargetPositionFactory.kt:107}
 */
export class NearestRotationTargetPositionFactory extends FaceTargetPositionFactory {
    constructor(config: PositionFactoryConfiguration)
    readonly config: PositionFactoryConfiguration;
    aimAtNearestPointToRotationLine(targetPos: BlockPos, face: AlignedFace): Vec3;
    producePositionOnFace(face: AlignedFace, targetPos: BlockPos): Vec3;
}
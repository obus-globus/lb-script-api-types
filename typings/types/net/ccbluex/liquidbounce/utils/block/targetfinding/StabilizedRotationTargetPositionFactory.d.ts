import type { FaceTargetPositionFactory } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/FaceTargetPositionFactory.d.ts'
import type { PositionFactoryConfiguration } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/PositionFactoryConfiguration.d.ts'
import type { AlignedFace } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/AlignedFace.d.ts'
import type { Line } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/Line.d.ts'
import type { LocalPlayer } from '../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Always targets the point with the nearest rotation angle to the current rotation angle.
 * If you have questions, you have to ask @superblaubeere27 because I am too stupid to explain this without a picture.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/FaceTargetPositionFactory.kt#L161 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/FaceTargetPositionFactory.kt:161}
 */
export class StabilizedRotationTargetPositionFactory extends FaceTargetPositionFactory {
    constructor(config: PositionFactoryConfiguration, optimalLine: Line | null)
    readonly config: PositionFactoryConfiguration;
    // private optimalLine: Line | null;
    // private getTargetFace(player: LocalPlayer, trimmedFace: AlignedFace): AlignedFace | null;
    producePositionOnFace(face: AlignedFace, targetPos: BlockPos): Vec3;
}
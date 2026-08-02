import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ScaffoldTechnique } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/scaffold/techniques/ScaffoldTechnique.d.ts'
import type { Rotation } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { BlockPlacementTarget } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/BlockPlacementTarget.d.ts'
import type { Line } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/Line.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Pose } from '../../../../../../../../../net/minecraft/world/entity/Pose.d.ts'
import type { ItemStack } from '../../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockHitResult } from '../../../../../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { Vec3 } from '../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Normal technique, which is basically just normal scaffold.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/ee595b88333a1dc2ff3055eb6be0860bbedcbdb3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/techniques/ScaffoldExpandTechnique.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/techniques/ScaffoldExpandTechnique.kt:44}
 */
export class ScaffoldExpandTechnique extends ScaffoldTechnique {
    static Companion: Tagged$Companion;
    static INSTANCE: ScaffoldExpandTechnique;
    // private expandLength: number;
    // private /*not mapped: */ getExpandLength(): number;
    // private expandPos(position: Vec3, expand: number, yaw: number): BlockPos;
    findPlacementTarget(predictedPos: Vec3, predictedPose: Pose, optimalLine: Line | null, bestStack: ItemStack): BlockPlacementTarget | null;
    getCrosshairTarget(target: BlockPlacementTarget | null, rotation: Rotation): BlockHitResult | null;
    getRotations(target: BlockPlacementTarget | null): Rotation | null;
}
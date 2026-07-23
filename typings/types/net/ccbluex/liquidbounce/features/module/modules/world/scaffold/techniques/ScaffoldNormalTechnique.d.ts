import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerAfterJumpEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerAfterJumpEvent.d.ts'
import type { ScaffoldTechnique } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/scaffold/techniques/ScaffoldTechnique.d.ts'
import type { Rotation } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { AimMode } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/AimMode.d.ts'
import type { BlockPlacementTarget } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/BlockPlacementTarget.d.ts'
import type { FaceTargetPositionFactory } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/FaceTargetPositionFactory.d.ts'
import type { Line } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/Line.d.ts'
import type { Pose } from '../../../../../../../../../net/minecraft/world/entity/Pose.d.ts'
import type { ItemStack } from '../../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockHitResult } from '../../../../../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { Vec3 } from '../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Normal technique, which is basically just normal scaffold.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/techniques/ScaffoldNormalTechnique.kt#L67 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/techniques/ScaffoldNormalTechnique.kt:67}
 */
export class ScaffoldNormalTechnique extends ScaffoldTechnique {
    static Companion: Tagged$Companion;
    static INSTANCE: ScaffoldNormalTechnique;
    // private afterJumpEvent: EventHook<PlayerAfterJumpEvent>;
    // private aimMode: AimMode;
    // private /*not mapped: */ getAimMode(): AimMode;
    // private randomization: number;
    // private requiresSight: boolean;
    // private /*not mapped: */ getRequiresSight(): boolean;
    findPlacementTarget(predictedPos: Vec3, predictedPose: Pose, optimalLine: Line | null, bestStack: ItemStack): BlockPlacementTarget | null;
    getCrosshairTarget(target: BlockPlacementTarget | null, rotation: Rotation): BlockHitResult | null;
    // private getFacePositionFactoryForConfig(predictedPos: Vec3, predictedPose: Pose, optimalLine: Line | null): FaceTargetPositionFactory;
    getRotations(target: BlockPlacementTarget | null): Rotation | null;
}
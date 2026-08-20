import type { Comparator } from '../../../../../../../../../java/util/Comparator.d.ts'
import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Rotation } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { BlockPlacementTarget } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/BlockPlacementTarget.d.ts'
import type { Line } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/Line.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Pose } from '../../../../../../../../../net/minecraft/world/entity/Pose.d.ts'
import type { ItemStack } from '../../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockHitResult } from '../../../../../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { Vec3 } from '../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ScaffoldTechnique extends Mode {
    static Companion: Tagged$Companion;
    protected constructor(name: string)
    readonly parent: ModeValueGroup<ScaffoldTechnique>;
    getParent(): ModeValueGroup<ScaffoldTechnique>;
    findPlacementTarget(predictedPos: Vec3, predictedPose: Pose, optimalLine: Line | null, bestStack: ItemStack): BlockPlacementTarget | null;
    getCrosshairTarget(target: BlockPlacementTarget | null, rotation: Rotation): BlockHitResult | null;
    getRotations(target: BlockPlacementTarget | null): Rotation | null;
    /**
     * Prioritize the block that is closest to the line, if there was no line found, prioritize the nearest block.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/techniques/ScaffoldTechnique.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/scaffold/techniques/ScaffoldTechnique.kt:54}
     */
    protected priorityComparator(predictedPos: Vec3, optimalLine: Line | null): (param0: BlockPos, param1: BlockPos) => number;
}
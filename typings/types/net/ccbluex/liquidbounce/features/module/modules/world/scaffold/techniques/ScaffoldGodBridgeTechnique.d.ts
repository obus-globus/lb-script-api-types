import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { LedgeAction } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/scaffold/features/LedgeAction.d.ts'
import type { ScaffoldLedgeExtension } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/scaffold/features/ScaffoldLedgeExtension.d.ts'
import type { ScaffoldGodBridgeTechnique$Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/scaffold/techniques/ScaffoldGodBridgeTechnique$Mode.d.ts'
import type { ScaffoldTechnique } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/scaffold/techniques/ScaffoldTechnique.d.ts'
import type { Rotation } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { BlockPlacementTarget } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/BlockPlacementTarget.d.ts'
import type { Line } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/Line.d.ts'
import type { Pose } from '../../../../../../../../../net/minecraft/world/entity/Pose.d.ts'
import type { ItemStack } from '../../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Vec3 } from '../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ScaffoldGodBridgeTechnique extends ScaffoldTechnique implements ScaffoldLedgeExtension {
    static Companion: Tagged$Companion;
    static INSTANCE: ScaffoldGodBridgeTechnique;
    // private forceSneakBelowCount: number;
    // private /*not mapped: */ getForceSneakBelowCount(): number;
    // private isOnRightSide: boolean;
    // private modes: ScaffoldGodBridgeTechnique$Mode[];
    // private /*not mapped: */ getModes(): ScaffoldGodBridgeTechnique$Mode[];
    // private sneakTime: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getSneakTime(): { start: number; endInclusive: number; step: number };
    findPlacementTarget(predictedPos: Vec3, predictedPose: Pose, optimalLine: Line | null, bestStack: ItemStack): BlockPlacementTarget | null;
    // private getRotationForDiagonalInput(movingYaw: number): Rotation;
    // private getRotationForNoInput(target: BlockPlacementTarget): Rotation;
    // private getRotationForStraightInput(movingYaw: number): Rotation;
    getRotations(target: BlockPlacementTarget | null): Rotation | null;
    ledge(target: BlockPlacementTarget | null, rotation: Rotation): LedgeAction;
}
import type { ClosedFloatingPointRange } from '../../../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { ScaffoldTechnique } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/scaffold/techniques/ScaffoldTechnique.d.ts'
import type { Rotation } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { BlockPlacementTarget } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/BlockPlacementTarget.d.ts'
import type { Line } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/Line.d.ts'
import type { Pose } from '../../../../../../../../../net/minecraft/world/entity/Pose.d.ts'
import type { ItemStack } from '../../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Vec3 } from '../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ScaffoldBreezilyTechnique extends ScaffoldTechnique {
    static Companion: Tagged$Companion;
    static INSTANCE: ScaffoldBreezilyTechnique;
    // private currentEdgeDistanceRandom: number;
    // private edgeDistance: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getEdgeDistance(): ClosedFloatingPointRange<number>;
    // private handleMovementInput: EventHook<MovementInputEvent>;
    // private lastAirTime: number;
    // private lastSideways: number;
    findPlacementTarget(predictedPos: Vec3, predictedPose: Pose, optimalLine: Line | null, bestStack: ItemStack): BlockPlacementTarget | null;
    // private getRotationForDiagonalInput(movingYaw: number): Rotation;
    // private getRotationForNoInput(target: BlockPlacementTarget): Rotation;
    // private getRotationForStraightInput(movingYaw: number): Rotation;
    getRotations(target: BlockPlacementTarget | null): Rotation | null;
}
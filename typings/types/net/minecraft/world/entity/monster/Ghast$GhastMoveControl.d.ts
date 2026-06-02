import type { BooleanSupplier } from '../../../../../java/util/function/BooleanSupplier.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Mob } from '../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { MoveControl } from '../../../../../net/minecraft/world/entity/ai/control/MoveControl.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class Ghast$GhastMoveControl extends MoveControl {
    static MIN_SPEED: number;
    static MIN_SPEED_SQR: number;
    constructor(ghast: Mob, careful: boolean, shouldBeStopped: () => kotlin.Boolean)
    // private careful: boolean;
    // private floatDuration: number;
    // private ghast: Mob;
    // private shouldBeStopped: () => kotlin.Boolean;
    // private blockTraversalPossible(level: BlockGetter, start: Vec3, end: Vec3, pos: BlockPos, canPathThroughWater: boolean, canPathThroughLava: boolean): boolean;
    // private canReach(travel: Vec3): boolean;
    tick(): void;
}
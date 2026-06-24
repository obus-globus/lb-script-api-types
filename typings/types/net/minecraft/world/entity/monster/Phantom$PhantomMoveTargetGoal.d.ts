import type { Goal } from '../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Phantom } from '../../../../../net/minecraft/world/entity/monster/Phantom.d.ts'
export abstract class Phantom$PhantomMoveTargetGoal extends Goal {
    constructor(null_: Phantom)
    touchingTarget(): boolean;
}
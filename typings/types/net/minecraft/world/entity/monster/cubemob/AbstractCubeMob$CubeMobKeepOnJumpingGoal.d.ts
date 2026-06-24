import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { AbstractCubeMob } from '../../../../../../net/minecraft/world/entity/monster/cubemob/AbstractCubeMob.d.ts'
export class AbstractCubeMob$CubeMobKeepOnJumpingGoal extends Goal {
    constructor(mob: AbstractCubeMob)
    // private cubeMob: AbstractCubeMob;
    canUse(): boolean;
    tick(): void;
}
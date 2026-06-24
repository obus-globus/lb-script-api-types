import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { AbstractCubeMob } from '../../../../../../net/minecraft/world/entity/monster/cubemob/AbstractCubeMob.d.ts'
export class AbstractCubeMob$CubeMobAttackGoal extends Goal {
    constructor(cubeMob: AbstractCubeMob)
    // private cubeMob: AbstractCubeMob;
    // private growTiredTimer: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    requiresUpdateEveryTick(): boolean;
    start(): void;
    tick(): void;
}
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { AbstractSchoolingFish } from '../../../../../../net/minecraft/world/entity/animal/fish/AbstractSchoolingFish.d.ts'
export class FollowFlockLeaderGoal extends Goal {
    constructor(mob: AbstractSchoolingFish)
    // private mob: AbstractSchoolingFish;
    // private nextStartTick: number;
    // private timeToRecalcPath: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    nextStartTick(mob: AbstractSchoolingFish): number;
    start(): void;
    stop(): void;
    tick(): void;
}
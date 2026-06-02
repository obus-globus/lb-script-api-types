import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
export class RandomLookAroundGoal extends Goal {
    constructor(mob: Mob)
    // private lookTime: number;
    // private mob: Mob;
    // private relX: number;
    // private relZ: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    requiresUpdateEveryTick(): boolean;
    start(): void;
    tick(): void;
}
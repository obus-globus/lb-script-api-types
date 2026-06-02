import type { Mob } from '../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Goal } from '../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
export class Ghast$GhastLookGoal extends Goal {
    constructor(ghast: Mob)
    // private ghast: Mob;
    canUse(): boolean;
    requiresUpdateEveryTick(): boolean;
    tick(): void;
}
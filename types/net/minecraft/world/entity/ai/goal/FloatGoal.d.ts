import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
export class FloatGoal extends Goal {
    constructor(mob: Mob)
    // private mob: Mob;
    canUse(): boolean;
    requiresUpdateEveryTick(): boolean;
    tick(): void;
}
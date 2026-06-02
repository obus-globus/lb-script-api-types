import type { Goal } from '../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Slime } from '../../../../../net/minecraft/world/entity/monster/Slime.d.ts'
export class Slime$SlimeFloatGoal extends Goal {
    constructor(mob: Slime)
    // private slime: Slime;
    canUse(): boolean;
    requiresUpdateEveryTick(): boolean;
    tick(): void;
}
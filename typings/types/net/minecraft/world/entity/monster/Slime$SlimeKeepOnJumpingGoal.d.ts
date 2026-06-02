import type { Goal } from '../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Slime } from '../../../../../net/minecraft/world/entity/monster/Slime.d.ts'
export class Slime$SlimeKeepOnJumpingGoal extends Goal {
    constructor(mob: Slime)
    // private slime: Slime;
    canUse(): boolean;
    tick(): void;
}
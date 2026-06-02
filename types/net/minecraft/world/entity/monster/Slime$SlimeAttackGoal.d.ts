import type { Goal } from '../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Slime } from '../../../../../net/minecraft/world/entity/monster/Slime.d.ts'
export class Slime$SlimeAttackGoal extends Goal {
    constructor(slime: Slime)
    // private growTiredTimer: number;
    // private slime: Slime;
    canContinueToUse(): boolean;
    canUse(): boolean;
    requiresUpdateEveryTick(): boolean;
    start(): void;
    tick(): void;
}
import type { Goal } from '../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Guardian } from '../../../../../net/minecraft/world/entity/monster/Guardian.d.ts'
export class Guardian$GuardianAttackGoal extends Goal {
    constructor(guardian: Guardian)
    // private attackTime: number;
    // private elder: boolean;
    // private guardian: Guardian;
    canContinueToUse(): boolean;
    canUse(): boolean;
    requiresUpdateEveryTick(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}
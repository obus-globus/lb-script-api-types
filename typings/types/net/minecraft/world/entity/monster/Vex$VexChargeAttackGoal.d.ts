import type { Goal } from '../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
export class Vex$VexChargeAttackGoal extends Goal {
    constructor(null_: Vex$VexChargeAttackGoal)
    canContinueToUse(): boolean;
    canUse(): boolean;
    requiresUpdateEveryTick(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}
import type { Goal } from '../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Vex } from '../../../../../net/minecraft/world/entity/monster/Vex.d.ts'
export class Vex$VexChargeAttackGoal extends Goal {
    constructor(null_: Vex)
    canContinueToUse(): boolean;
    canUse(): boolean;
    requiresUpdateEveryTick(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { BreakDoorGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/BreakDoorGoal.d.ts'
export class Vindicator$VindicatorBreakDoorGoal extends BreakDoorGoal {
    constructor(mob: Mob)
    canContinueToUse(): boolean;
    canUse(): boolean;
    start(): void;
}
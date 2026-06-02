import type { Goal } from '../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Ghast } from '../../../../../net/minecraft/world/entity/monster/Ghast.d.ts'
export class Ghast$GhastShootFireballGoal extends Goal {
    constructor(ghast: Ghast)
    chargeTime: number;
    // private ghast: Ghast;
    canUse(): boolean;
    requiresUpdateEveryTick(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}
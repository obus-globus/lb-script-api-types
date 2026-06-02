import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
export class EatBlockGoal extends Goal {
    constructor(mob: Mob)
    readonly eatAnimationTick: number;
    // private level: Level;
    // private mob: Mob;
    canContinueToUse(): boolean;
    canUse(): boolean;
    getEatAnimationTick(): number;
    start(): void;
    stop(): void;
    tick(): void;
}
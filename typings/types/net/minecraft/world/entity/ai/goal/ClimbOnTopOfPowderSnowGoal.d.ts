import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
export class ClimbOnTopOfPowderSnowGoal extends Goal {
    constructor(mob: Mob, level: Level)
    // private level: Level;
    // private mob: Mob;
    canUse(): boolean;
    requiresUpdateEveryTick(): boolean;
    tick(): void;
}
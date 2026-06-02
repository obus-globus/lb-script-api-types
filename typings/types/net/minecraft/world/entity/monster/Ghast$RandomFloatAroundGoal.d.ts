import type { Mob } from '../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Goal } from '../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class Ghast$RandomFloatAroundGoal extends Goal {
    static getSuitableFlyToPosition(parammob: Mob, paramdistanceToBlocks: number): Vec3;
    constructor(ghast: Mob)
    constructor(ghast: Mob, distanceToBlocks: number)
    // private distanceToBlocks: number;
    // private ghast: Mob;
    canContinueToUse(): boolean;
    canUse(): boolean;
    start(): void;
}
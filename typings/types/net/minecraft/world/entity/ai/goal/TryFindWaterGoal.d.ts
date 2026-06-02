import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
export class TryFindWaterGoal extends Goal {
    constructor(mob: PathfinderMob)
    // private mob: PathfinderMob;
    canUse(): boolean;
    start(): void;
}
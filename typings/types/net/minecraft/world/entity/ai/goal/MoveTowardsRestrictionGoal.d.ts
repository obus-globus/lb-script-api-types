import type { PathfinderMob } from '../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
export class MoveTowardsRestrictionGoal extends Goal {
    constructor(mob: PathfinderMob, moveSpeedModifier: number)
    // private mob: PathfinderMob;
    // private speedModifier: number;
    // private wantedX: number;
    // private wantedY: number;
    // private wantedZ: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    start(): void;
}
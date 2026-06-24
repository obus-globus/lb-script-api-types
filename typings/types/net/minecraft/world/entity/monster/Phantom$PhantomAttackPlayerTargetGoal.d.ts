import type { Goal } from '../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { TargetingConditions } from '../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions.d.ts'
import type { Phantom } from '../../../../../net/minecraft/world/entity/monster/Phantom.d.ts'
export class Phantom$PhantomAttackPlayerTargetGoal extends Goal {
    private constructor(null_: Phantom)
    // private attackTargeting: TargetingConditions;
    // private nextScanTick: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
}
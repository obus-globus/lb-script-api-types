import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { TargetingConditions } from '../../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions.d.ts'
export abstract class Fox$FoxBehaviorGoal extends Goal {
    private constructor(null_: Fox$FoxBehaviorGoal)
    // private alertableTargeting: TargetingConditions;
    alertable(): boolean;
    hasShelter(): boolean;
}
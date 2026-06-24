import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { TargetingConditions } from '../../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions.d.ts'
import type { Fox } from '../../../../../../net/minecraft/world/entity/animal/fox/Fox.d.ts'
export abstract class Fox$FoxBehaviorGoal extends Goal {
    private constructor(null_: Fox)
    // private alertableTargeting: TargetingConditions;
    alertable(): boolean;
    hasShelter(): boolean;
}
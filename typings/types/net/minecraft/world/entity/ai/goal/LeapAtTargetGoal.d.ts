import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
export class LeapAtTargetGoal extends Goal {
    constructor(mob: Mob, yd: number)
    // private mob: Mob;
    // private target: LivingEntity;
    // private yd: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    start(): void;
}
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
export class OcelotAttackGoal extends Goal {
    constructor(mob: Mob)
    // private attackTime: number;
    // private mob: Mob;
    // private target: LivingEntity;
    canContinueToUse(): boolean;
    canUse(): boolean;
    requiresUpdateEveryTick(): boolean;
    stop(): void;
    tick(): void;
}
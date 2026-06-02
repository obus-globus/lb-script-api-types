import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Goal } from '../../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { TargetingConditions } from '../../../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions.d.ts'
export abstract class TargetGoal extends Goal {
    constructor(mob: Mob, mustSee: boolean)
    constructor(mob: Mob, mustSee: boolean, mustReach: boolean)
    // private mob: Mob;
    // private mustReach: boolean;
    // private mustSee: boolean;
    // private reachCache: number;
    // private reachCacheTime: number;
    // private targetMob: LivingEntity;
    // private unseenMemoryTicks: number;
    // private unseenTicks: number;
    canAttack(target: LivingEntity, targetConditions: TargetingConditions): boolean;
    canContinueToUse(): boolean;
    // private canReach(target: LivingEntity): boolean;
    getFollowDistance(): number;
    setUnseenMemoryTicks(unseenMemoryTicks: number): TargetGoal;
    start(): void;
    stop(): void;
}
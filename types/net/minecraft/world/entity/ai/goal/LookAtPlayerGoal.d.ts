import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { Goal } from '../../../../../../net/minecraft/world/entity/ai/goal/Goal.d.ts'
import type { TargetingConditions } from '../../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions.d.ts'
export class LookAtPlayerGoal extends Goal {
    static DEFAULT_PROBABILITY: number;
    constructor(mob: Mob, lookAtType: Class<LivingEntity>, lookDistance: number)
    constructor(mob: Mob, lookAtType: Class<LivingEntity>, lookDistance: number, probability: number)
    constructor(mob: Mob, lookAtType: Class<LivingEntity>, lookDistance: number, probability: number, onlyHorizontal: boolean)
    // private lookAt: Entity;
    // private lookAtContext: TargetingConditions;
    // private lookAtType: Class<LivingEntity>;
    // private lookDistance: number;
    // private lookTime: number;
    // private mob: Mob;
    // private onlyHorizontal: boolean;
    // private probability: number;
    canContinueToUse(): boolean;
    canUse(): boolean;
    start(): void;
    stop(): void;
    tick(): void;
}
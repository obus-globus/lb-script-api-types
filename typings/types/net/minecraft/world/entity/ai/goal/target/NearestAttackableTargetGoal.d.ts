import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { TargetGoal } from '../../../../../../../net/minecraft/world/entity/ai/goal/target/TargetGoal.d.ts'
import type { TargetingConditions } from '../../../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions.d.ts'
import type { TargetingConditions$Selector } from '../../../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions$Selector.d.ts'
import type { AABB } from '../../../../../../../net/minecraft/world/phys/AABB.d.ts'
export class NearestAttackableTargetGoal<T extends LivingEntity> extends TargetGoal {
    constructor(mob: Mob, targetType: Class<T>, mustSee: boolean)
    constructor(mob: Mob, targetType: Class<T>, mustSee: boolean, mustReach: boolean)
    constructor(mob: Mob, targetType: Class<T>, mustSee: boolean, selector: (param0: LivingEntity, param1: ServerLevel) => boolean)
    constructor(mob: Mob, targetType: Class<T>, randomInterval: number, mustSee: boolean, mustReach: boolean, selector: (param0: LivingEntity, param1: ServerLevel) => boolean)
    // private randomInterval: number;
    target: LivingEntity;
    // private targetConditions: TargetingConditions;
    // private targetType: Class<T>;
    canUse(): boolean;
    findTarget(): void;
    // private getTargetConditions(): TargetingConditions;
    getTargetSearchArea(followDistance: number): AABB;
    setTarget(target: LivingEntity): void;
    start(): void;
}
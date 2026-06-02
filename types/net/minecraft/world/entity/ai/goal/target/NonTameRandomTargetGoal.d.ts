import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { TamableAnimal } from '../../../../../../../net/minecraft/world/entity/TamableAnimal.d.ts'
import type { NearestAttackableTargetGoal } from '../../../../../../../net/minecraft/world/entity/ai/goal/target/NearestAttackableTargetGoal.d.ts'
import type { TargetingConditions$Selector } from '../../../../../../../net/minecraft/world/entity/ai/targeting/TargetingConditions$Selector.d.ts'
export class NonTameRandomTargetGoal<T extends LivingEntity> extends NearestAttackableTargetGoal<T> {
    constructor(mob: TamableAnimal, targetType: Class<T>, mustSee: boolean, subselector: (param0: LivingEntity, param1: ServerLevel) => kotlin.Boolean)
    // private tamableMob: TamableAnimal;
    canContinueToUse(): boolean;
    canUse(): boolean;
}
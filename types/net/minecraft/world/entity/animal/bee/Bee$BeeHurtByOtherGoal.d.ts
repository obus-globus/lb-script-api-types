import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { HurtByTargetGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/target/HurtByTargetGoal.d.ts'
import type { Bee } from '../../../../../../net/minecraft/world/entity/animal/bee/Bee.d.ts'
export class Bee$BeeHurtByOtherGoal extends HurtByTargetGoal {
    constructor(null_: Bee$BeeHurtByOtherGoal, bee: Bee)
    alertOther(other: Mob, hurtByMob: LivingEntity): void;
    canContinueToUse(): boolean;
}
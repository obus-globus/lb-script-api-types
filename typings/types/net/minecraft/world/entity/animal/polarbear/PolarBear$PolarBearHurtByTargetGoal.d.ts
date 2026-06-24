import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Mob } from '../../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { HurtByTargetGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/target/HurtByTargetGoal.d.ts'
import type { PolarBear } from '../../../../../../net/minecraft/world/entity/animal/polarbear/PolarBear.d.ts'
export class PolarBear$PolarBearHurtByTargetGoal extends HurtByTargetGoal {
    constructor(null_: PolarBear)
    alertOther(other: Mob, hurtByMob: LivingEntity): void;
    start(): void;
}
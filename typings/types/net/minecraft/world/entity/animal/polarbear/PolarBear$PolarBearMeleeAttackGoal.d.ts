import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { MeleeAttackGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/MeleeAttackGoal.d.ts'
import type { PolarBear } from '../../../../../../net/minecraft/world/entity/animal/polarbear/PolarBear.d.ts'
export class PolarBear$PolarBearMeleeAttackGoal extends MeleeAttackGoal {
    constructor(null_: PolarBear)
    checkAndPerformAttack(target: LivingEntity): void;
    stop(): void;
}
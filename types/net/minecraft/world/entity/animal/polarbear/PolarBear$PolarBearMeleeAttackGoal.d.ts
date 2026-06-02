import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { MeleeAttackGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/MeleeAttackGoal.d.ts'
export class PolarBear$PolarBearMeleeAttackGoal extends MeleeAttackGoal {
    constructor(null_: PolarBear$PolarBearMeleeAttackGoal)
    checkAndPerformAttack(target: LivingEntity): void;
    stop(): void;
}
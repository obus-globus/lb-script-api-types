import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { MeleeAttackGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/MeleeAttackGoal.d.ts'
export class Fox$FoxMeleeAttackGoal extends MeleeAttackGoal {
    constructor(null_: Fox$FoxMeleeAttackGoal, speedModifier: number, trackTarget: boolean)
    canUse(): boolean;
    checkAndPerformAttack(target: LivingEntity): void;
    start(): void;
}
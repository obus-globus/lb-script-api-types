import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { MeleeAttackGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/MeleeAttackGoal.d.ts'
import type { Fox } from '../../../../../../net/minecraft/world/entity/animal/fox/Fox.d.ts'
export class Fox$FoxMeleeAttackGoal extends MeleeAttackGoal {
    constructor(null_: Fox, speedModifier: number, trackTarget: boolean)
    canUse(): boolean;
    checkAndPerformAttack(target: LivingEntity): void;
    start(): void;
}
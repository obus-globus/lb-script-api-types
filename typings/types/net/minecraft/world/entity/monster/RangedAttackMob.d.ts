import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export interface RangedAttackMob extends Object{
    performRangedAttack(target: LivingEntity, power: number): void;
}
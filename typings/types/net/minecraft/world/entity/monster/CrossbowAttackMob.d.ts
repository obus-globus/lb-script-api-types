import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { RangedAttackMob } from '../../../../../net/minecraft/world/entity/monster/RangedAttackMob.d.ts'
export interface CrossbowAttackMob extends Object, RangedAttackMob{
    getTarget(): LivingEntity;
    onCrossbowAttackPerformed(): void;
    performCrossbowAttack(body: LivingEntity, crossbowPower: number): void;
    performRangedAttack(target: LivingEntity, power: number): void;
    setChargingCrossbow(isCharging: boolean): void;
}
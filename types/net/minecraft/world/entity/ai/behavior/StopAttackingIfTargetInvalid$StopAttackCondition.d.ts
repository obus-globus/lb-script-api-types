import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export interface StopAttackingIfTargetInvalid$StopAttackCondition extends Object{
    test(level: ServerLevel, target: LivingEntity): boolean;
}
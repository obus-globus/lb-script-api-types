import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export interface StopAttackingIfTargetInvalid$TargetErasedCallback<E extends unknown> extends Object{
    accept(level: ServerLevel, body: E, target: LivingEntity): void;
}
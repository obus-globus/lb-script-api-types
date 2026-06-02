import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { DamageSource } from '../../../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export interface ServerEntityCombatEvents$AfterKilledOtherEntity extends Object{
    afterKilledOtherEntity(arg0: ServerLevel, arg1: Entity, arg2: LivingEntity, arg3: DamageSource): void;
}
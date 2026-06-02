import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ServerEntityCombatEvents$AfterKilledOtherEntity } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/ServerEntityCombatEvents$AfterKilledOtherEntity.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { ServerLevel } from '../../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { DamageSource } from '../../../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class ServerEntityCombatEvents extends Object {
    static AFTER_KILLED_OTHER_ENTITY: Event<(param0: ServerLevel, param1: Entity, param2: LivingEntity, param3: DamageSource) => void>;
    private constructor()
}
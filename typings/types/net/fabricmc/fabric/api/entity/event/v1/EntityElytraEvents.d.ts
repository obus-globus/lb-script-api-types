import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EntityElytraEvents$Allow } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/EntityElytraEvents$Allow.d.ts'
import type { EntityElytraEvents$Custom } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/EntityElytraEvents$Custom.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class EntityElytraEvents extends Object {
    static ALLOW: Event<(param0: LivingEntity) => boolean>;
    static CUSTOM: Event<(param0: LivingEntity, param1: boolean) => boolean>;
    private constructor()
}
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class EntityHealthUpdateEvent extends Event {
    constructor(entity: LivingEntity, old: number, new_: number, max: number)
    readonly entity: LivingEntity;
    readonly max: number;
    readonly new: number;
    readonly old: number;
}
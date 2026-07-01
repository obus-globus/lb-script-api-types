import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
/**
 * Fires when a living entity's health changes, exposing the entity and its old, new and max health.
 */
export class EntityHealthUpdateEvent extends Event {
    constructor(entity: LivingEntity, old: number, new_: number, max: number)
    readonly entity: LivingEntity;
    readonly max: number;
    readonly new: number;
    readonly old: number;
}
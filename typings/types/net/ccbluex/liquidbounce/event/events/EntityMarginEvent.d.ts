import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
export class EntityMarginEvent extends Event {
    constructor(entity: Entity, margin: number)
    readonly entity: Entity;
    margin: number;
}
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Entity$RemovalReason } from '../../../../../net/minecraft/world/entity/Entity$RemovalReason.d.ts'
export class WorldEntityRemoveEvent extends Event {
    constructor(entity: Entity, reason: Entity$RemovalReason)
    readonly entity: Entity;
    readonly reason: Entity$RemovalReason;
}
import type { CancellableEvent } from '../../../../../net/ccbluex/liquidbounce/event/CancellableEvent.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
/**
 * Fires when the player attacks an entity, exposing the target entity. Cancellable - cancelling prevents the attack.
 */
export class AttackEntityEvent extends CancellableEvent {
    constructor(entity: Entity)
    readonly entity: Entity;
}
import type { CancellableEvent } from '../../../../../net/ccbluex/liquidbounce/event/CancellableEvent.d.ts'
/**
 * Fires each client player tick, before movement is processed. Cancellable - cancelling skips the player's tick.
 */
export class PlayerTickEvent extends CancellableEvent {
    constructor()
}
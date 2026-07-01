import type { CancellableEvent } from '../../../../../net/ccbluex/liquidbounce/event/CancellableEvent.d.ts'
import type { EventState } from '../../../../../net/ccbluex/liquidbounce/event/EventState.d.ts'
/**
 * Fires around the movement-packet sync (PRE/POST phase), exposing the position and on-ground flag reported to the server. Cancellable.
 */
export class PlayerNetworkMovementTickEvent extends CancellableEvent {
    constructor(state: EventState, x: number, y: number, z: number, ground: boolean)
    ground: boolean;
    readonly state: EventState;
    x: number;
    y: number;
    z: number;
}
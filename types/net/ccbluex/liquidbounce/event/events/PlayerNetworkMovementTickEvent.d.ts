import type { CancellableEvent } from '../../../../../net/ccbluex/liquidbounce/event/CancellableEvent.d.ts'
import type { EventState } from '../../../../../net/ccbluex/liquidbounce/event/EventState.d.ts'
export class PlayerNetworkMovementTickEvent extends CancellableEvent {
    constructor(state: EventState, x: number, y: number, z: number, ground: boolean)
    ground: boolean;
    readonly state: EventState;
    x: number;
    y: number;
    z: number;
}
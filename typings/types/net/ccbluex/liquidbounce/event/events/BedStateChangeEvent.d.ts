import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
export class BedStateChangeEvent extends Event implements WebSocketEvent {
    constructor(bedStates: E[])
    readonly bedStates: E[];
}
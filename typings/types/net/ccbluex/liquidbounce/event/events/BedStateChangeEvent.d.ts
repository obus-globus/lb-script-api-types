import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
import type { BedState } from '../../../../../net/ccbluex/liquidbounce/utils/block/bed/BedState.d.ts'
export class BedStateChangeEvent extends Event implements WebSocketEvent {
    constructor(bedStates: BedState[])
    readonly bedStates: BedState[];
}
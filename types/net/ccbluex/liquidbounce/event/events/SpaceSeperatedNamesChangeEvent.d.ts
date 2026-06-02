import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
export class SpaceSeperatedNamesChangeEvent extends Event implements WebSocketEvent {
    constructor(value: boolean)
    readonly value: boolean;
}
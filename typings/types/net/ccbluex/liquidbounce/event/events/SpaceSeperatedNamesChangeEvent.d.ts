import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
/**
 * Fires when the space-separated-names setting changes, exposing the new value.
 */
export class SpaceSeperatedNamesChangeEvent extends Event implements WebSocketEvent {
    constructor(value: boolean)
    readonly value: boolean;
}
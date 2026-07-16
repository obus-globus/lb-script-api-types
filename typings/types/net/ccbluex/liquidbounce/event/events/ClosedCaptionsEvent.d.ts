import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { ClosedCaptionEntry } from '../../../../../net/ccbluex/liquidbounce/event/events/ClosedCaptionEntry.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
export class ClosedCaptionsEvent extends Event implements WebSocketEvent {
    constructor(entries: ClosedCaptionEntry[])
    readonly entries: ClosedCaptionEntry[];
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
}
import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
/**
 * Fires to request a refresh of the ArrayList HUD element.
 */
export class RefreshArrayListEvent extends Event implements WebSocketEvent {
    static INSTANCE: RefreshArrayListEvent;
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
}
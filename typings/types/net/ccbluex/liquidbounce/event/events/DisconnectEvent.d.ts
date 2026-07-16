import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
/**
 * Fires when the client disconnects from a server.
 */
export class DisconnectEvent extends Event implements WebSocketEvent {
    static INSTANCE: DisconnectEvent;
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
}
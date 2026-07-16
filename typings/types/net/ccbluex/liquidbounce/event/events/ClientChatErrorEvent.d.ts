import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
/**
 * Fires when the client chat encounters an error, exposing the error message.
 */
export class ClientChatErrorEvent extends Event implements WebSocketEvent {
    constructor(error: string)
    readonly error: string;
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
}
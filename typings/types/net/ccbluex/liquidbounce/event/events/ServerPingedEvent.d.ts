import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
import type { ServerData } from '../../../../../net/minecraft/client/multiplayer/ServerData.d.ts'
/**
 * Fires when a server is pinged in the multiplayer list, exposing the server data.
 */
export class ServerPingedEvent extends Event implements WebSocketEvent {
    constructor(server: ServerData)
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
    readonly server: ServerData;
}
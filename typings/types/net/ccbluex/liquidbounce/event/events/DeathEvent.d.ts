import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
/**
 * Fires when the local player dies.
 */
export class DeathEvent extends Event implements WebSocketEvent {
    static INSTANCE: DeathEvent;
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
}
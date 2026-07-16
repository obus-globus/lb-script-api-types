import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
/**
 * Reports the result of an Account Manager login, exposing the logged-in username or an error.
 */
export class AccountManagerLoginResultEvent extends Event implements WebSocketEvent {
    constructor(username: string | null, error: string | null)
    readonly error: string | null;
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
    readonly username: string | null;
}
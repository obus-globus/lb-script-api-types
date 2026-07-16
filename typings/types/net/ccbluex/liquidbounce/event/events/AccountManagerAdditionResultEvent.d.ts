import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
/**
 * Reports the result of adding an account through the Account Manager, exposing the added username or an error.
 */
export class AccountManagerAdditionResultEvent extends Event implements WebSocketEvent {
    constructor(username: string | null, error: string | null)
    readonly error: string | null;
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
    readonly username: string | null;
}
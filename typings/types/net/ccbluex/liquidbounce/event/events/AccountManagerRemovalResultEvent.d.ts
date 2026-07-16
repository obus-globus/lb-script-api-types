import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
/**
 * Reports the result of removing an account through the Account Manager, exposing the removed username.
 */
export class AccountManagerRemovalResultEvent extends Event implements WebSocketEvent {
    constructor(username: string | null)
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
    readonly username: string | null;
}
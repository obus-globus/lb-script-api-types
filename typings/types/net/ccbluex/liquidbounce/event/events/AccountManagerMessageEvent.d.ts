import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
/**
 * A status message emitted by the Account Manager.
 */
export class AccountManagerMessageEvent extends Event implements WebSocketEvent {
    constructor(message: string)
    readonly message: string;
}
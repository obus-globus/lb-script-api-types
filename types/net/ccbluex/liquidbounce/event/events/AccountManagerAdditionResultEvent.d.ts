import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
export class AccountManagerAdditionResultEvent extends Event implements WebSocketEvent {
    constructor(username: string | null, error: string | null)
    readonly error: string | null;
    readonly username: string | null;
}
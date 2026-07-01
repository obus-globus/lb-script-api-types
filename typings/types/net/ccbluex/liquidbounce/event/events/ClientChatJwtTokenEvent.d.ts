import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
/**
 * Fires when a JWT token is issued for client-chat authentication.
 */
export class ClientChatJwtTokenEvent extends Event {
    constructor(jwt: string)
    readonly jwt: string;
}
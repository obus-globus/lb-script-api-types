import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
export class ClientChatJwtTokenEvent extends Event {
    constructor(jwt: string)
    readonly jwt: string;
}
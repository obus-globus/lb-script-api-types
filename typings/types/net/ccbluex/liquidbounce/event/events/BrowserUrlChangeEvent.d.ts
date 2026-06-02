import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
export class BrowserUrlChangeEvent extends Event implements WebSocketEvent {
    constructor(index: number, url: string)
    readonly index: number;
    readonly url: string;
}
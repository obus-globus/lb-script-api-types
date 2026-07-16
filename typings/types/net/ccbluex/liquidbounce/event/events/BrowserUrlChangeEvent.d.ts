import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
/**
 * Fires when an integrated browser tab's URL changes, exposing the tab index and the new URL.
 */
export class BrowserUrlChangeEvent extends Event implements WebSocketEvent {
    constructor(index: number, url: string)
    readonly index: number;
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
    readonly url: string;
}
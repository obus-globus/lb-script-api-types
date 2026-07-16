import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
/**
 * A translated character (Unicode code point) input event, e.g. for typing into text fields.
 */
export class KeyboardCharEvent extends Event implements WebSocketEvent {
    constructor(codePoint: number)
    readonly codePoint: number;
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
}
import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
/**
 * Fires when the GUI scale factor changes, exposing the new scale factor.
 */
export class ScaleFactorChangeEvent extends Event implements WebSocketEvent {
    constructor(scaleFactor: number)
    readonly scaleFactor: number;
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
}
import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
/**
 * Fires when the measured frame rate changes, exposing the new FPS.
 */
export class FpsChangeEvent extends Event implements WebSocketEvent {
    constructor(fps: number)
    readonly fps: number;
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
}
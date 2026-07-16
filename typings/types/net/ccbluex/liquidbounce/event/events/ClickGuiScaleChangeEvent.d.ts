import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
/**
 * Fires when the ClickGUI scale changes, exposing the new scale.
 */
export class ClickGuiScaleChangeEvent extends Event implements WebSocketEvent {
    constructor(value: number)
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
    readonly value: number;
}
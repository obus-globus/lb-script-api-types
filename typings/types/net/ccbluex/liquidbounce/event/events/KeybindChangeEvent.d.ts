import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
/**
 * Fires when the client's keybind configuration changes.
 */
export class KeybindChangeEvent extends Event implements WebSocketEvent {
    static INSTANCE: KeybindChangeEvent;
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
}
import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
/**
 * Fires when a configuration value changes, exposing the changed value.
 */
export class ValueChangedEvent extends Event implements WebSocketEvent {
    constructor(value: Value<Object>)
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
    readonly value: Value<Object>;
}
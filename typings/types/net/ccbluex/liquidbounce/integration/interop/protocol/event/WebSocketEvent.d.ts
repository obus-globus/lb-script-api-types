import type { Gson } from '../../../../../../../com/google/gson/Gson.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
/**
 * Interface indicating that the marked event is designated for transmission through WebSocket communication.
 * This interface serves as a declarative marker for WebSocket-compatible events, signaling their eligibility for
 * propagation over WebSocket connections.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.kt:29}
 */
export interface WebSocketEvent extends Object{
    /**
     * Indicates whether the event should be serialized asynchronously.
     * If set to true, the event will be serialized in a separate thread.
     *
     * The most common situation you need to set this to `false` is the event contains **mutable** states
     * that is modified after the event is created.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.kt:39}
     */
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
}
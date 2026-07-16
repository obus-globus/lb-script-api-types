import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { CancellableEvent } from '../../../../../net/ccbluex/liquidbounce/event/CancellableEvent.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
/**
 * Base type for title-bar events (title text, subtitle text, fade timing, clear). Cancellable.
 */
export class TitleEvent extends CancellableEvent implements WebSocketEvent {
    protected constructor()
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
}
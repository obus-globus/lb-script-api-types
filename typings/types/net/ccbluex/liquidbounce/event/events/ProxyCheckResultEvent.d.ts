import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { Proxy } from '../../../../../net/ccbluex/liquidbounce/features/misc/proxy/Proxy.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
/**
 * Reports the result of a proxy check, exposing the proxy or an error.
 */
export class ProxyCheckResultEvent extends Event implements WebSocketEvent {
    constructor(proxy: Proxy | null, error: string | null)
    readonly error: string | null;
    readonly proxy: Proxy | null;
    readonly serializeAsync: boolean;
    readonly serializer: Gson;
}
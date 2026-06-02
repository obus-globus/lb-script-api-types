import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { Proxy } from '../../../../../net/ccbluex/liquidbounce/features/misc/proxy/Proxy.d.ts'
import type { WebSocketEvent } from '../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/event/WebSocketEvent.d.ts'
export class ProxyCheckResultEvent extends Event implements WebSocketEvent {
    constructor(proxy: Proxy | null, error: string | null)
    readonly error: string | null;
    readonly proxy: Proxy | null;
}
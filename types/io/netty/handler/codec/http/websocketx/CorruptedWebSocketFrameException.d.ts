import type { CorruptedFrameException } from '../../../../../../io/netty/handler/codec/CorruptedFrameException.d.ts'
import type { WebSocketCloseStatus } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketCloseStatus.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class CorruptedWebSocketFrameException extends CorruptedFrameException {
    constructor()
    constructor(arg0: WebSocketCloseStatus, arg1: string)
    constructor(arg0: WebSocketCloseStatus, arg1: string, arg2: Throwable)
    constructor(arg0: WebSocketCloseStatus, arg1: Throwable)
    // private closeStatus: WebSocketCloseStatus;
    closeStatus(): WebSocketCloseStatus;
}
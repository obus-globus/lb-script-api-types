import type { HttpResponse } from '../../../../../../io/netty/handler/codec/http/HttpResponse.d.ts'
import type { WebSocketHandshakeException } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketHandshakeException.d.ts'
export class WebSocketClientHandshakeException extends WebSocketHandshakeException {
    constructor(arg0: string)
    constructor(arg0: string, arg1: HttpResponse)
    // private response: HttpResponse;
    response(): HttpResponse;
}
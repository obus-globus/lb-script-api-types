import type { HttpRequest } from '../../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { WebSocketHandshakeException } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketHandshakeException.d.ts'
export class WebSocketServerHandshakeException extends WebSocketHandshakeException {
    constructor(arg0: string)
    constructor(arg0: string, arg1: HttpRequest)
    // private request: HttpRequest;
    request(): HttpRequest;
}
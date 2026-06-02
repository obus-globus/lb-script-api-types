import type { FullHttpRequest } from '../../../../../../io/netty/handler/codec/http/FullHttpRequest.d.ts'
import type { FullHttpResponse } from '../../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { WebSocketDecoderConfig } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketDecoderConfig.d.ts'
import type { WebSocketFrameDecoder } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrameDecoder.d.ts'
import type { WebSocketFrameEncoder } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrameEncoder.d.ts'
import type { WebSocketServerHandshaker } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketServerHandshaker.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class WebSocketServerHandshaker08 extends WebSocketServerHandshaker {
    static SUB_PROTOCOL_WILDCARD: string;
    static WEBSOCKET_08_ACCEPT_GUID: string;
    constructor(arg0: string, arg1: string, arg2: WebSocketDecoderConfig)
    constructor(arg0: string, arg1: string, arg2: boolean, arg3: number)
    constructor(arg0: string, arg1: string, arg2: boolean, arg3: number, arg4: boolean)
    newHandshakeResponse(arg0: FullHttpRequest, arg1: Map$Entry<string, string>[]): FullHttpResponse;
    newWebSocketEncoder(): WebSocketFrameEncoder;
    newWebsocketDecoder(): WebSocketFrameDecoder;
}
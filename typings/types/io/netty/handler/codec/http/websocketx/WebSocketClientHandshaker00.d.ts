import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { FullHttpRequest } from '../../../../../../io/netty/handler/codec/http/FullHttpRequest.d.ts'
import type { FullHttpResponse } from '../../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { WebSocketClientHandshaker } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketClientHandshaker.d.ts'
import type { WebSocketFrameDecoder } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrameDecoder.d.ts'
import type { WebSocketFrameEncoder } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrameEncoder.d.ts'
import type { WebSocketVersion } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketVersion.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class WebSocketClientHandshaker00 extends WebSocketClientHandshaker {
    constructor(arg0: URI, arg1: WebSocketVersion, arg2: string, arg3: Map$Entry<string, string>[], arg4: number)
    constructor(arg0: URI, arg1: WebSocketVersion, arg2: string, arg3: Map$Entry<string, string>[], arg4: number, arg5: number)
    constructor(arg0: URI, arg1: WebSocketVersion, arg2: string, arg3: Map$Entry<string, string>[], arg4: number, arg5: number, arg6: boolean)
    constructor(arg0: URI, arg1: WebSocketVersion, arg2: string, arg3: Map$Entry<string, string>[], arg4: number, arg5: number, arg6: boolean, arg7: boolean)
    // private expectedChallengeResponseBytes: ByteBuf;
    newHandshakeRequest(): FullHttpRequest;
    newWebSocketEncoder(): WebSocketFrameEncoder;
    newWebsocketDecoder(): WebSocketFrameDecoder;
    setForceCloseTimeoutMillis(arg0: number): WebSocketClientHandshaker00;
    verify(arg0: FullHttpResponse): void;
}
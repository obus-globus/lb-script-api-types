import type { FullHttpRequest } from '../../../../../../io/netty/handler/codec/http/FullHttpRequest.d.ts'
import type { FullHttpResponse } from '../../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { WebSocketClientHandshaker } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketClientHandshaker.d.ts'
import type { WebSocketFrameDecoder } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrameDecoder.d.ts'
import type { WebSocketFrameEncoder } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrameEncoder.d.ts'
import type { WebSocketVersion } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketVersion.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class WebSocketClientHandshaker08 extends WebSocketClientHandshaker {
    static MAGIC_GUID: string;
    constructor(arg0: URI, arg1: WebSocketVersion, arg2: string, arg3: boolean, arg4: Map$Entry<string, string>[], arg5: number)
    constructor(arg0: URI, arg1: WebSocketVersion, arg2: string, arg3: boolean, arg4: Map$Entry<string, string>[], arg5: number, arg6: boolean, arg7: boolean)
    constructor(arg0: URI, arg1: WebSocketVersion, arg2: string, arg3: boolean, arg4: Map$Entry<string, string>[], arg5: number, arg6: boolean, arg7: boolean, arg8: number)
    constructor(arg0: URI, arg1: WebSocketVersion, arg2: string, arg3: boolean, arg4: Map$Entry<string, string>[], arg5: number, arg6: boolean, arg7: boolean, arg8: number, arg9: boolean)
    constructor(arg0: URI, arg1: WebSocketVersion, arg2: string, arg3: boolean, arg4: Map$Entry<string, string>[], arg5: number, arg6: boolean, arg7: boolean, arg8: number, arg9: boolean, arg10: boolean)
    // private allowExtensions: boolean;
    // private allowMaskMismatch: boolean;
    // private expectedChallengeResponseString: string;
    // private performMasking: boolean;
    newHandshakeRequest(): FullHttpRequest;
    newWebSocketEncoder(): WebSocketFrameEncoder;
    newWebsocketDecoder(): WebSocketFrameDecoder;
    setForceCloseTimeoutMillis(arg0: number): WebSocketClientHandshaker08;
    verify(arg0: FullHttpResponse): void;
}
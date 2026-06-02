import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { WebSocketClientHandshakeException } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketClientHandshakeException.d.ts'
import type { WebSocketClientHandshaker } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketClientHandshaker.d.ts'
import type { WebSocketClientProtocolConfig } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketClientProtocolConfig.d.ts'
import type { WebSocketFrame } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrame.d.ts'
import type { WebSocketProtocolHandler } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketProtocolHandler.d.ts'
import type { WebSocketVersion } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketVersion.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class WebSocketClientProtocolHandler extends WebSocketProtocolHandler {
    constructor(arg0: WebSocketClientHandshaker)
    constructor(arg0: WebSocketClientHandshaker, arg1: WebSocketClientProtocolConfig)
    constructor(arg0: WebSocketClientHandshaker, arg1: boolean)
    constructor(arg0: WebSocketClientHandshaker, arg1: boolean, arg2: boolean)
    constructor(arg0: WebSocketClientHandshaker, arg1: boolean, arg2: boolean, arg3: number)
    constructor(arg0: WebSocketClientHandshaker, arg1: boolean, arg2: boolean, arg3: number, arg4: boolean)
    constructor(arg0: WebSocketClientHandshaker, arg1: boolean, arg2: number)
    constructor(arg0: WebSocketClientHandshaker, arg1: number)
    constructor(arg0: WebSocketClientProtocolConfig)
    constructor(arg0: URI, arg1: WebSocketVersion, arg2: string, arg3: boolean, arg4: Map$Entry<string, string>[], arg5: number)
    constructor(arg0: URI, arg1: WebSocketVersion, arg2: string, arg3: boolean, arg4: Map$Entry<string, string>[], arg5: number, arg6: boolean)
    constructor(arg0: URI, arg1: WebSocketVersion, arg2: string, arg3: boolean, arg4: Map$Entry<string, string>[], arg5: number, arg6: boolean, arg7: boolean, arg8: boolean)
    constructor(arg0: URI, arg1: WebSocketVersion, arg2: string, arg3: boolean, arg4: Map$Entry<string, string>[], arg5: number, arg6: boolean, arg7: boolean, arg8: boolean, arg9: number)
    constructor(arg0: URI, arg1: WebSocketVersion, arg2: string, arg3: boolean, arg4: Map$Entry<string, string>[], arg5: number, arg6: boolean, arg7: number)
    constructor(arg0: URI, arg1: WebSocketVersion, arg2: string, arg3: boolean, arg4: Map$Entry<string, string>[], arg5: number, arg6: number)
    // private clientConfig: WebSocketClientProtocolConfig;
    // private handshaker: WebSocketClientHandshaker;
    buildHandshakeException(arg0: string): WebSocketClientHandshakeException;
    decode(arg0: ChannelHandlerContext, arg1: WebSocketFrame, arg2: Object[]): void;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handshaker(): WebSocketClientHandshaker;
}
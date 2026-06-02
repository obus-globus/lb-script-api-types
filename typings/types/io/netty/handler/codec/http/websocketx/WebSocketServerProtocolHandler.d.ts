import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { WebSocketDecoderConfig } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketDecoderConfig.d.ts'
import type { WebSocketFrame } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrame.d.ts'
import type { WebSocketProtocolHandler } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketProtocolHandler.d.ts'
import type { WebSocketServerHandshakeException } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketServerHandshakeException.d.ts'
import type { WebSocketServerProtocolConfig } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketServerProtocolConfig.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class WebSocketServerProtocolHandler extends WebSocketProtocolHandler {
    constructor(arg0: WebSocketServerProtocolConfig)
    constructor(arg0: string)
    constructor(arg0: string, arg1: boolean)
    constructor(arg0: string, arg1: boolean, arg2: number)
    constructor(arg0: string, arg1: number)
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: boolean)
    constructor(arg0: string, arg1: string, arg2: boolean, arg3: boolean, arg4: number, arg5: WebSocketDecoderConfig)
    constructor(arg0: string, arg1: string, arg2: boolean, arg3: number)
    constructor(arg0: string, arg1: string, arg2: boolean, arg3: number, arg4: boolean)
    constructor(arg0: string, arg1: string, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean)
    constructor(arg0: string, arg1: string, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean, arg6: boolean)
    constructor(arg0: string, arg1: string, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean, arg6: boolean, arg7: number)
    constructor(arg0: string, arg1: string, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean, arg6: number)
    constructor(arg0: string, arg1: string, arg2: boolean, arg3: number, arg4: boolean, arg5: number)
    constructor(arg0: string, arg1: string, arg2: boolean, arg3: number, arg4: number)
    constructor(arg0: string, arg1: string, arg2: boolean, arg3: number)
    constructor(arg0: string, arg1: string, arg2: number)
    // private serverConfig: WebSocketServerProtocolConfig;
    buildHandshakeException(arg0: string): WebSocketServerHandshakeException;
    decode(arg0: ChannelHandlerContext, arg1: WebSocketFrame, arg2: Object[]): void;
    exceptionCaught(arg0: ChannelHandlerContext, arg1: Throwable): void;
    handlerAdded(arg0: ChannelHandlerContext): void;
}
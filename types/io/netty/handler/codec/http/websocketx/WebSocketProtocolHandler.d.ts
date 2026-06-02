import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelOutboundHandler } from '../../../../../../io/netty/channel/ChannelOutboundHandler.d.ts'
import type { ChannelPromise } from '../../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { MessageToMessageDecoder } from '../../../../../../io/netty/handler/codec/MessageToMessageDecoder.d.ts'
import type { WebSocketCloseStatus } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketCloseStatus.d.ts'
import type { WebSocketFrame } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketFrame.d.ts'
import type { WebSocketHandshakeException } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketHandshakeException.d.ts'
import type { SocketAddress } from '../../../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export abstract class WebSocketProtocolHandler extends MessageToMessageDecoder<WebSocketFrame> implements ChannelOutboundHandler {
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: WebSocketCloseStatus, arg2: number)
    // private closeSent: ChannelPromise;
    // private closeStatus: WebSocketCloseStatus;
    // private dropPongFrames: boolean;
    // private forceCloseTimeoutMillis: number;
    // private applyCloseSentTimeout(arg0: ChannelHandlerContext): void;
    bind(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: ChannelPromise): void;
    buildHandshakeException(arg0: string): WebSocketHandshakeException;
    close(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    closeSent(arg0: ChannelPromise): void;
    connect(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: SocketAddress, arg3: ChannelPromise): void;
    decode(arg0: ChannelHandlerContext, arg1: WebSocketFrame, arg2: Object[]): void;
    deregister(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    disconnect(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    exceptionCaught(arg0: ChannelHandlerContext, arg1: Throwable): void;
    flush(arg0: ChannelHandlerContext): void;
    read(arg0: ChannelHandlerContext): void;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}
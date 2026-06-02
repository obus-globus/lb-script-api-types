import type { ChannelFuture } from '../../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandlerAdapter } from '../../../../../../io/netty/channel/ChannelInboundHandlerAdapter.d.ts'
import type { ChannelPromise } from '../../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { WebSocketClientHandshaker } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketClientHandshaker.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WebSocketClientProtocolHandshakeHandler extends ChannelInboundHandlerAdapter {
    constructor(arg0: WebSocketClientHandshaker)
    constructor(arg0: WebSocketClientHandshaker, arg1: number)
    // private ctx: ChannelHandlerContext;
    // private handshakePromise: ChannelPromise;
    // private handshakeTimeoutMillis: number;
    // private handshaker: WebSocketClientHandshaker;
    // private applyHandshakeTimeout(): void;
    channelActive(arg0: ChannelHandlerContext): void;
    channelInactive(arg0: ChannelHandlerContext): void;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    getHandshakeFuture(): ChannelFuture;
    handlerAdded(arg0: ChannelHandlerContext): void;
}
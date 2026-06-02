import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandlerAdapter } from '../../../../../../io/netty/channel/ChannelInboundHandlerAdapter.d.ts'
import type { ChannelPromise } from '../../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { HttpRequest } from '../../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { WebSocketServerProtocolConfig } from '../../../../../../io/netty/handler/codec/http/websocketx/WebSocketServerProtocolConfig.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WebSocketServerProtocolHandshakeHandler extends ChannelInboundHandlerAdapter {
    constructor(arg0: WebSocketServerProtocolConfig)
    // private ctx: ChannelHandlerContext;
    // private handshakePromise: ChannelPromise;
    // private isWebSocketPath: boolean;
    // private serverConfig: WebSocketServerProtocolConfig;
    // private applyHandshakeTimeout(): void;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    // private checkNextUri(arg0: string, arg1: string): boolean;
    handlerAdded(arg0: ChannelHandlerContext): void;
    // private isWebSocketPath(arg0: HttpRequest): boolean;
}
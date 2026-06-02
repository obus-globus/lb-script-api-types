import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandlerAdapter } from '../../../../../io/netty/channel/ChannelInboundHandlerAdapter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HttpServer } from '../../../../../net/ccbluex/netty/http/HttpServer.d.ts'
export class WebSocketHandler extends ChannelInboundHandlerAdapter {
    constructor(server: HttpServer)
    // private server: HttpServer;
    channelRead(ctx: ChannelHandlerContext, msg: Object): void;
}
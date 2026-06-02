import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { SimpleChannelInboundHandler } from '../../../../../../io/netty/channel/SimpleChannelInboundHandler.d.ts'
import type { FullHttpRequest } from '../../../../../../io/netty/handler/codec/http/FullHttpRequest.d.ts'
export class OAuthClient$NettyAuthHandler extends SimpleChannelInboundHandler<FullHttpRequest> {
    constructor()
    protected channelRead0(ctx: ChannelHandlerContext, msg: FullHttpRequest): void;
}
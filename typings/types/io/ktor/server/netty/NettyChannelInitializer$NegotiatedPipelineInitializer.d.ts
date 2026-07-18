import type { NettyChannelInitializer } from '../../../../io/ktor/server/netty/NettyChannelInitializer.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ApplicationProtocolNegotiationHandler } from '../../../../io/netty/handler/ssl/ApplicationProtocolNegotiationHandler.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class NettyChannelInitializer$NegotiatedPipelineInitializer extends ApplicationProtocolNegotiationHandler {
    constructor(null_: NettyChannelInitializer)
    protected configurePipeline(ctx: ChannelHandlerContext, protocol: string): void;
    protected handshakeFailure(ctx: ChannelHandlerContext, cause: Throwable | null): void;
}
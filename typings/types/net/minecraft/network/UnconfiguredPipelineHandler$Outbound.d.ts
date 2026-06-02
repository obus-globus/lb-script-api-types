import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelOutboundHandlerAdapter } from '../../../io/netty/channel/ChannelOutboundHandlerAdapter.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class UnconfiguredPipelineHandler$Outbound extends ChannelOutboundHandlerAdapter {
    constructor()
    write(ctx: ChannelHandlerContext, msg: Object, promise: ChannelPromise): void;
}
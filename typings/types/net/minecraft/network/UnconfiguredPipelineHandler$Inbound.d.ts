import type { ChannelDuplexHandler } from '../../../io/netty/channel/ChannelDuplexHandler.d.ts'
import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class UnconfiguredPipelineHandler$Inbound extends ChannelDuplexHandler {
    constructor()
    channelRead(ctx: ChannelHandlerContext, msg: Object): void;
    write(ctx: ChannelHandlerContext, msg: Object, promise: ChannelPromise): void;
}
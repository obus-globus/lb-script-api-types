import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandlerAdapter } from '../../../../../../io/netty/channel/ChannelInboundHandlerAdapter.d.ts'
import type { TypeParameterMatcher } from '../../../../../../io/netty/util/internal/TypeParameterMatcher.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AdvancedChannelInboundHandler<T extends unknown> extends ChannelInboundHandlerAdapter {
    constructor()
    constructor(arg0: Class<T>)
    // private matcher: TypeParameterMatcher;
    acceptInboundMessage(arg0: ChannelHandlerContext, arg1: Object): boolean;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    channelRead0(arg0: ChannelHandlerContext, arg1: T): void;
}
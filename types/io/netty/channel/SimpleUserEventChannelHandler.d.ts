import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandlerAdapter } from '../../../io/netty/channel/ChannelInboundHandlerAdapter.d.ts'
import type { TypeParameterMatcher } from '../../../io/netty/util/internal/TypeParameterMatcher.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class SimpleUserEventChannelHandler<I extends Object | number | string | boolean> extends ChannelInboundHandlerAdapter {
    constructor()
    constructor(arg0: Class<I>)
    constructor(arg0: Class<I>, arg1: boolean)
    constructor(arg0: boolean)
    // private autoRelease: boolean;
    // private matcher: TypeParameterMatcher;
    acceptEvent(arg0: Object): boolean;
    eventReceived(arg0: ChannelHandlerContext, arg1: I): void;
    userEventTriggered(arg0: ChannelHandlerContext, arg1: Object): void;
}
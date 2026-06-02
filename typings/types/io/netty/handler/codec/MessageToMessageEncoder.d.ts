import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelOutboundHandlerAdapter } from '../../../../io/netty/channel/ChannelOutboundHandlerAdapter.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { TypeParameterMatcher } from '../../../../io/netty/util/internal/TypeParameterMatcher.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class MessageToMessageEncoder<I extends Object | number | string | boolean> extends ChannelOutboundHandlerAdapter {
    constructor()
    constructor(arg0: Class<I>)
    // private matcher: TypeParameterMatcher;
    acceptOutboundMessage(arg0: Object): boolean;
    encode(arg0: ChannelHandlerContext, arg1: I, arg2: Object[]): void;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}
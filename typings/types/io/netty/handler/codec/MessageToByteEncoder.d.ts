import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelOutboundHandlerAdapter } from '../../../../io/netty/channel/ChannelOutboundHandlerAdapter.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { TypeParameterMatcher } from '../../../../io/netty/util/internal/TypeParameterMatcher.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class MessageToByteEncoder<I extends unknown> extends ChannelOutboundHandlerAdapter {
    constructor()
    constructor(arg0: Class<I>)
    constructor(arg0: Class<I>, arg1: boolean)
    constructor(arg0: boolean)
    // private matcher: TypeParameterMatcher;
    // private preferDirect: boolean;
    acceptOutboundMessage(arg0: Object): boolean;
    allocateBuffer(arg0: ChannelHandlerContext, arg1: I, arg2: boolean): ByteBuf;
    encode(arg0: ChannelHandlerContext, arg1: I, arg2: ByteBuf): void;
    isPreferDirect(): boolean;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}
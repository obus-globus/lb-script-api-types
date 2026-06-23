import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandlerAdapter } from '../../../../io/netty/channel/ChannelInboundHandlerAdapter.d.ts'
import type { TypeParameterMatcher } from '../../../../io/netty/util/internal/TypeParameterMatcher.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class MessageToMessageDecoder<I extends unknown> extends ChannelInboundHandlerAdapter {
    constructor()
    constructor(arg0: Class<I>)
    // private decodeCalled: boolean;
    // private matcher: TypeParameterMatcher;
    // private messageProduced: boolean;
    acceptInboundMessage(arg0: Object): boolean;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    channelReadComplete(arg0: ChannelHandlerContext): void;
    decode(arg0: ChannelHandlerContext, arg1: I, arg2: Object[]): void;
}
import type { AbstractChannelHandlerContext } from '../../../io/netty/channel/AbstractChannelHandlerContext.d.ts'
import type { ChannelHandler } from '../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandler } from '../../../io/netty/channel/ChannelInboundHandler.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class DefaultChannelPipeline$TailContext extends AbstractChannelHandlerContext implements ChannelInboundHandler {
    constructor(null_: DefaultChannelPipeline$TailContext, arg1: (Object | null)[])
    channelActive(arg0: ChannelHandlerContext): void;
    channelInactive(arg0: ChannelHandlerContext): void;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    channelReadComplete(arg0: ChannelHandlerContext): void;
    channelRegistered(arg0: ChannelHandlerContext): void;
    channelUnregistered(arg0: ChannelHandlerContext): void;
    channelWritabilityChanged(arg0: ChannelHandlerContext): void;
    exceptionCaught(arg0: ChannelHandlerContext, arg1: Throwable): void;
    handler(): ChannelHandler;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    userEventTriggered(arg0: ChannelHandlerContext, arg1: Object): void;
}
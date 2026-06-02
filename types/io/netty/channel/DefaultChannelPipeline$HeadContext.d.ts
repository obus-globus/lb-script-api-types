import type { AbstractChannelHandlerContext } from '../../../io/netty/channel/AbstractChannelHandlerContext.d.ts'
import type { Channel$Unsafe } from '../../../io/netty/channel/Channel$Unsafe.d.ts'
import type { ChannelHandler } from '../../../io/netty/channel/ChannelHandler.d.ts'
import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandler } from '../../../io/netty/channel/ChannelInboundHandler.d.ts'
import type { ChannelOutboundHandler } from '../../../io/netty/channel/ChannelOutboundHandler.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class DefaultChannelPipeline$HeadContext extends AbstractChannelHandlerContext implements ChannelInboundHandler, ChannelOutboundHandler {
    constructor(null_: DefaultChannelPipeline$HeadContext, arg1: (Object | null)[])
    // private unsafe: Channel$Unsafe;
    bind(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: ChannelPromise): void;
    channelActive(arg0: ChannelHandlerContext): void;
    channelInactive(arg0: ChannelHandlerContext): void;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    channelReadComplete(arg0: ChannelHandlerContext): void;
    channelRegistered(arg0: ChannelHandlerContext): void;
    channelUnregistered(arg0: ChannelHandlerContext): void;
    channelWritabilityChanged(arg0: ChannelHandlerContext): void;
    close(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    connect(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: SocketAddress, arg3: ChannelPromise): void;
    deregister(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    disconnect(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    exceptionCaught(arg0: ChannelHandlerContext, arg1: Throwable): void;
    flush(arg0: ChannelHandlerContext): void;
    handler(): ChannelHandler;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    read(arg0: ChannelHandlerContext): void;
    // private readIfIsAutoRead(): void;
    userEventTriggered(arg0: ChannelHandlerContext, arg1: Object): void;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}
import type { AbstractChannelHandlerContext } from '../../../io/netty/channel/AbstractChannelHandlerContext.d.ts'
import type { Channel$Unsafe } from '../../../io/netty/channel/Channel$Unsafe.d.ts'
import type { ChannelFuture } from '../../../io/netty/channel/ChannelFuture.d.ts'
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
    bind(arg0: SocketAddress): ChannelFuture;
    bind(arg0: SocketAddress, arg1: ChannelPromise): ChannelFuture;
    channelActive(arg0: ChannelHandlerContext): void;
    channelInactive(arg0: ChannelHandlerContext): void;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    channelReadComplete(arg0: ChannelHandlerContext): void;
    channelRegistered(arg0: ChannelHandlerContext): void;
    channelUnregistered(arg0: ChannelHandlerContext): void;
    channelWritabilityChanged(arg0: ChannelHandlerContext): void;
    close(): ChannelFuture;
    close(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    close(arg0: ChannelPromise): ChannelFuture;
    connect(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: SocketAddress, arg3: ChannelPromise): void;
    connect(arg0: SocketAddress): ChannelFuture;
    connect(arg0: SocketAddress, arg1: ChannelPromise): ChannelFuture;
    connect(arg0: SocketAddress, arg1: SocketAddress): ChannelFuture;
    connect(arg0: SocketAddress, arg1: SocketAddress, arg2: ChannelPromise): ChannelFuture;
    deregister(): ChannelFuture;
    deregister(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    deregister(arg0: ChannelPromise): ChannelFuture;
    disconnect(): ChannelFuture;
    disconnect(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    disconnect(arg0: ChannelPromise): ChannelFuture;
    exceptionCaught(arg0: ChannelHandlerContext, arg1: Throwable): void;
    flush(): ChannelHandlerContext;
    flush(arg0: ChannelHandlerContext): void;
    handler(): ChannelHandler;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    read(): ChannelHandlerContext;
    read(arg0: ChannelHandlerContext): void;
    // private readIfIsAutoRead(): void;
    userEventTriggered(arg0: ChannelHandlerContext, arg1: Object): void;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
    write(arg0: Object): ChannelFuture;
    write(arg0: Object, arg1: ChannelPromise): ChannelFuture;
    write(arg0: Object, arg1: boolean, arg2: ChannelPromise): void;
}
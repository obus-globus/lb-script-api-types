import type { ChannelDuplexHandler } from '../../../io/netty/channel/ChannelDuplexHandler.d.ts'
import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandler } from '../../../io/netty/channel/ChannelInboundHandler.d.ts'
import type { ChannelOutboundHandler } from '../../../io/netty/channel/ChannelOutboundHandler.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { CombinedChannelDuplexHandler$DelegatingChannelHandlerContext } from '../../../io/netty/channel/CombinedChannelDuplexHandler$DelegatingChannelHandlerContext.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class CombinedChannelDuplexHandler<I extends ChannelInboundHandler, O extends ChannelOutboundHandler> extends ChannelDuplexHandler {
    constructor()
    constructor(arg0: I, arg1: O)
    // private handlerAdded: boolean;
    // private inboundCtx: CombinedChannelDuplexHandler$DelegatingChannelHandlerContext;
    // private inboundHandler: I;
    // private outboundCtx: CombinedChannelDuplexHandler$DelegatingChannelHandlerContext;
    // private outboundHandler: O;
    bind(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: ChannelPromise): void;
    channelActive(arg0: ChannelHandlerContext): void;
    channelInactive(arg0: ChannelHandlerContext): void;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    channelReadComplete(arg0: ChannelHandlerContext): void;
    channelRegistered(arg0: ChannelHandlerContext): void;
    channelUnregistered(arg0: ChannelHandlerContext): void;
    channelWritabilityChanged(arg0: ChannelHandlerContext): void;
    // private checkAdded(): void;
    close(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    connect(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: SocketAddress, arg3: ChannelPromise): void;
    deregister(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    disconnect(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    exceptionCaught(arg0: ChannelHandlerContext, arg1: Throwable): void;
    flush(arg0: ChannelHandlerContext): void;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    inboundHandler(): I;
    init(arg0: I, arg1: O): void;
    outboundHandler(): O;
    read(arg0: ChannelHandlerContext): void;
    removeInboundHandler(): void;
    removeOutboundHandler(): void;
    userEventTriggered(arg0: ChannelHandlerContext, arg1: Object): void;
    // private validate(arg0: I, arg1: O): void;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}
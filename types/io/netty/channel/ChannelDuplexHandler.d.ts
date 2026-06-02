import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandlerAdapter } from '../../../io/netty/channel/ChannelInboundHandlerAdapter.d.ts'
import type { ChannelOutboundHandler } from '../../../io/netty/channel/ChannelOutboundHandler.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ChannelDuplexHandler extends ChannelInboundHandlerAdapter implements ChannelOutboundHandler {
    constructor()
    bind(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: ChannelPromise): void;
    close(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    connect(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: SocketAddress, arg3: ChannelPromise): void;
    deregister(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    disconnect(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    flush(arg0: ChannelHandlerContext): void;
    read(arg0: ChannelHandlerContext): void;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}
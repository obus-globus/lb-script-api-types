import type { ChannelHandlerAdapter } from '../../../io/netty/channel/ChannelHandlerAdapter.d.ts'
import type { ChannelHandlerContext } from '../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelOutboundHandler } from '../../../io/netty/channel/ChannelOutboundHandler.d.ts'
import type { ChannelPromise } from '../../../io/netty/channel/ChannelPromise.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ChannelOutboundHandlerAdapter extends ChannelHandlerAdapter implements ChannelOutboundHandler {
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
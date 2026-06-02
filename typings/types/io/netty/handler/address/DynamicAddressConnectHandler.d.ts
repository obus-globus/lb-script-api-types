import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelOutboundHandlerAdapter } from '../../../../io/netty/channel/ChannelOutboundHandlerAdapter.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
export abstract class DynamicAddressConnectHandler extends ChannelOutboundHandlerAdapter {
    constructor()
    connect(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: SocketAddress, arg3: ChannelPromise): void;
    localAddress(arg0: SocketAddress, arg1: SocketAddress): SocketAddress;
    remoteAddress(arg0: SocketAddress, arg1: SocketAddress): SocketAddress;
}
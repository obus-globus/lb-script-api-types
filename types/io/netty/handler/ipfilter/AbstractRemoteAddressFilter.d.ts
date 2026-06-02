import type { ChannelFuture } from '../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandlerAdapter } from '../../../../io/netty/channel/ChannelInboundHandlerAdapter.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
export abstract class AbstractRemoteAddressFilter<T extends SocketAddress> extends ChannelInboundHandlerAdapter {
    constructor()
    accept(arg0: ChannelHandlerContext, arg1: T): boolean;
    channelAccepted(arg0: ChannelHandlerContext, arg1: T): void;
    channelActive(arg0: ChannelHandlerContext): void;
    channelRegistered(arg0: ChannelHandlerContext): void;
    channelRejected(arg0: ChannelHandlerContext, arg1: T): ChannelFuture;
    // private handleNewChannel(arg0: ChannelHandlerContext): boolean;
}
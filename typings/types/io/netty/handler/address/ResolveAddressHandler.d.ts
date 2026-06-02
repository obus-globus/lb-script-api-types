import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelOutboundHandlerAdapter } from '../../../../io/netty/channel/ChannelOutboundHandlerAdapter.d.ts'
import type { ChannelPromise } from '../../../../io/netty/channel/ChannelPromise.d.ts'
import type { AddressResolverGroup } from '../../../../io/netty/resolver/AddressResolverGroup.d.ts'
import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
export class ResolveAddressHandler extends ChannelOutboundHandlerAdapter {
    constructor(arg0: AddressResolverGroup<SocketAddress>)
    // private resolverGroup: AddressResolverGroup<SocketAddress>;
    connect(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: SocketAddress, arg3: ChannelPromise): void;
}
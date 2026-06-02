import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { AbstractRemoteAddressFilter } from '../../../../io/netty/handler/ipfilter/AbstractRemoteAddressFilter.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
export class UniqueIpFilter extends AbstractRemoteAddressFilter<InetSocketAddress> {
    constructor()
    // private connected: InetAddress[];
    accept(arg0: ChannelHandlerContext, arg1: InetSocketAddress): boolean;
}
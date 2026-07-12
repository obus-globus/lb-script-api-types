import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { AbstractRemoteAddressFilter } from '../../../../io/netty/handler/ipfilter/AbstractRemoteAddressFilter.d.ts'
import type { IpFilterRule } from '../../../../io/netty/handler/ipfilter/IpFilterRule.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
export class RuleBasedIpFilter extends AbstractRemoteAddressFilter<InetSocketAddress> {
    constructor(...arg0: IpFilterRule[])
    constructor(arg0: boolean, ...arg1: IpFilterRule[])
    // private acceptIfNotFound: boolean;
    // private rules: IpFilterRule[];
    accept(arg0: ChannelHandlerContext, arg1: InetSocketAddress): boolean;
}
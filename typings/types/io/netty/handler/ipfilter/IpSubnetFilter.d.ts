import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { AbstractRemoteAddressFilter } from '../../../../io/netty/handler/ipfilter/AbstractRemoteAddressFilter.d.ts'
import type { IpFilterRuleType } from '../../../../io/netty/handler/ipfilter/IpFilterRuleType.d.ts'
import type { IpSubnetFilterRule } from '../../../../io/netty/handler/ipfilter/IpSubnetFilterRule.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
export class IpSubnetFilter extends AbstractRemoteAddressFilter<InetSocketAddress> {
    constructor(arg0: IpSubnetFilterRule[])
    constructor(arg0: boolean, arg1: IpSubnetFilterRule[])
    constructor(arg0: boolean, arg1: IpSubnetFilterRule[])
    constructor(arg0: IpSubnetFilterRule[])
    // private acceptIfNotFound: boolean;
    // private ipFilterRuleTypeIPv4: IpFilterRuleType;
    // private ipFilterRuleTypeIPv6: IpFilterRuleType;
    // private ipv4Rules: IpSubnetFilterRule[];
    // private ipv6Rules: IpSubnetFilterRule[];
    accept(arg0: ChannelHandlerContext, arg1: InetSocketAddress): boolean;
}
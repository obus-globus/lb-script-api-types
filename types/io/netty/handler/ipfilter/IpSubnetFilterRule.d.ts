import type { IpFilterRule } from '../../../../io/netty/handler/ipfilter/IpFilterRule.d.ts'
import type { IpFilterRuleType } from '../../../../io/netty/handler/ipfilter/IpFilterRuleType.d.ts'
import type { InetAddress } from '../../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class IpSubnetFilterRule extends Object implements IpFilterRule, Comparable<IpSubnetFilterRule> {
    constructor(arg0: InetAddress, arg1: number, arg2: IpFilterRuleType)
    constructor(arg0: string, arg1: IpFilterRuleType)
    constructor(arg0: string, arg1: number, arg2: IpFilterRuleType)
    // private filterRule: IpFilterRule;
    // private ipAddress: string;
    compareTo(arg0: IpSubnetFilterRule): number;
    compareTo(arg0: InetSocketAddress): number;
    getFilterRule(): IpFilterRule;
    getIpAddress(): string;
    matches(arg0: InetSocketAddress): boolean;
    ruleType(): IpFilterRuleType;
}
import type { IpFilterRuleType } from '../../../../io/netty/handler/ipfilter/IpFilterRuleType.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IpFilterRule extends Object{
    matches(arg0: InetSocketAddress): boolean;
    ruleType(): IpFilterRuleType;
}
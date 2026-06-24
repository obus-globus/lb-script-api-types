import type { IpSubnetFilterRule$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { IpFilterRule } from '../../../../io/netty/handler/ipfilter/IpFilterRule.d.ts'
import type { IpFilterRuleType } from '../../../../io/netty/handler/ipfilter/IpFilterRuleType.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { Inet6Address } from '../../../../java/net/Inet6Address.d.ts'
import type { InetSocketAddress } from '../../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IpSubnetFilterRule$Ip6SubnetFilterRule extends Object implements IpFilterRule {
    private constructor(arg0: Inet6Address, arg1: number, arg2: IpFilterRuleType)
    constructor(arg0: Inet6Address, arg1: number, arg2: IpFilterRuleType, arg3: IpSubnetFilterRule$1)
    // private networkAddress: BigInteger;
    // private ruleType: IpFilterRuleType;
    // private subnetMask: BigInteger;
    matches(arg0: InetSocketAddress): boolean;
    ruleType(): IpFilterRuleType;
}
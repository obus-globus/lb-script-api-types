import type { AbstractBootstrapConfig } from '../../../io/netty/bootstrap/AbstractBootstrapConfig.d.ts'
import type { Bootstrap } from '../../../io/netty/bootstrap/Bootstrap.d.ts'
import type { Channel } from '../../../io/netty/channel/Channel.d.ts'
import type { AddressResolverGroup } from '../../../io/netty/resolver/AddressResolverGroup.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class BootstrapConfig extends AbstractBootstrapConfig<Bootstrap, Channel> {
    constructor(arg0: Bootstrap)
    remoteAddress(): SocketAddress;
    resolver(): AddressResolverGroup<Object>;
    toString(): string;
}
import type { AddressResolver } from '../../../io/netty/resolver/AddressResolver.d.ts'
import type { AddressResolverGroup } from '../../../io/netty/resolver/AddressResolverGroup.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NoopAddressResolverGroup extends AddressResolverGroup<SocketAddress> {
    static INSTANCE: NoopAddressResolverGroup;
    private constructor()
    newResolver(arg0: (Object | null)[]): AddressResolver<SocketAddress>;
}
import type { AddressResolver } from '../../../io/netty/resolver/AddressResolver.d.ts'
import type { AddressResolverGroup } from '../../../io/netty/resolver/AddressResolverGroup.d.ts'
import type { InetSocketAddress } from '../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultAddressResolverGroup extends AddressResolverGroup<InetSocketAddress> {
    static INSTANCE: DefaultAddressResolverGroup;
    private constructor()
    newResolver(arg0: (Object | null)[]): AddressResolver<InetSocketAddress>;
}
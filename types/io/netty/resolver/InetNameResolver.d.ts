import type { AddressResolver } from '../../../io/netty/resolver/AddressResolver.d.ts'
import type { SimpleNameResolver } from '../../../io/netty/resolver/SimpleNameResolver.d.ts'
import type { InetAddress } from '../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class InetNameResolver extends SimpleNameResolver<InetAddress> {
    constructor(arg0: (Object | null)[])
    // private addressResolver: AddressResolver<InetSocketAddress>;
    asAddressResolver(): AddressResolver<InetSocketAddress>;
}
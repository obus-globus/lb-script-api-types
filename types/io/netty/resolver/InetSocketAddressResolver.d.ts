import type { AbstractAddressResolver } from '../../../io/netty/resolver/AbstractAddressResolver.d.ts'
import type { NameResolver } from '../../../io/netty/resolver/NameResolver.d.ts'
import type { Promise } from '../../../io/netty/util/concurrent/Promise.d.ts'
import type { InetAddress } from '../../../java/net/InetAddress.d.ts'
import type { InetSocketAddress } from '../../../java/net/InetSocketAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class InetSocketAddressResolver extends AbstractAddressResolver<InetSocketAddress> {
    constructor(arg0: (Object | null)[], arg1: NameResolver<InetAddress>)
    // private nameResolver: NameResolver<InetAddress>;
    close(): void;
    doIsResolved(arg0: InetSocketAddress): boolean;
    doResolve(arg0: InetSocketAddress, arg1: Promise<InetSocketAddress>): void;
    doResolveAll(arg0: InetSocketAddress, arg1: Promise<InetSocketAddress[]>): void;
}
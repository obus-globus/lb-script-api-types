import type { AbstractAddressResolver } from '../../../io/netty/resolver/AbstractAddressResolver.d.ts'
import type { Promise } from '../../../io/netty/util/concurrent/Promise.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class NoopAddressResolver extends AbstractAddressResolver<SocketAddress> {
    constructor(arg0: (Object | null)[])
    doIsResolved(arg0: SocketAddress): boolean;
    doResolve(arg0: SocketAddress, arg1: Promise<SocketAddress>): void;
    doResolveAll(arg0: SocketAddress, arg1: Promise<SocketAddress[]>): void;
}
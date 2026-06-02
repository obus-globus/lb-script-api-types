import type { InetNameResolver } from '../../../io/netty/resolver/InetNameResolver.d.ts'
import type { Promise } from '../../../io/netty/util/concurrent/Promise.d.ts'
import type { InetAddress } from '../../../java/net/InetAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class DefaultNameResolver extends InetNameResolver {
    constructor(arg0: (Object | null)[])
    doResolve(arg0: string, arg1: Promise<InetAddress>): void;
    doResolveAll(arg0: string, arg1: Promise<InetAddress[]>): void;
}
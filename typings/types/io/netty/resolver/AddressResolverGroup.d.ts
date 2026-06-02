import type { AddressResolver } from '../../../io/netty/resolver/AddressResolver.d.ts'
import type { Future } from '../../../io/netty/util/concurrent/Future.d.ts'
import type { GenericFutureListener } from '../../../io/netty/util/concurrent/GenericFutureListener.d.ts'
import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class AddressResolverGroup<T extends SocketAddress> extends Object implements Closeable {
    constructor()
    // private executorTerminationListeners: Map<(Object | null)[], GenericFutureListener<Future<Object>>>;
    // private resolvers: Map<(Object | null)[], AddressResolver<T>>;
    close(): void;
    getResolver(arg0: (Object | null)[]): AddressResolver<T>;
    newResolver(arg0: (Object | null)[]): AddressResolver<T>;
}
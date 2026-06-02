import type { AddressResolver } from '../../../io/netty/resolver/AddressResolver.d.ts'
import type { Future } from '../../../io/netty/util/concurrent/Future.d.ts'
import type { Promise } from '../../../io/netty/util/concurrent/Promise.d.ts'
import type { TypeParameterMatcher } from '../../../io/netty/util/internal/TypeParameterMatcher.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class AbstractAddressResolver<T extends SocketAddress> extends Object implements AddressResolver<T> {
    constructor(arg0: (Object | null)[])
    constructor(arg0: (Object | null)[], arg1: Class<T>)
    // private executor: (Object | null)[];
    // private matcher: TypeParameterMatcher;
    close(): void;
    doIsResolved(arg0: T): boolean;
    doResolve(arg0: T, arg1: Promise<T>): void;
    doResolveAll(arg0: T, arg1: Promise<T[]>): void;
    executor(): (Object | null)[];
    isResolved(arg0: SocketAddress): boolean;
    isSupported(arg0: SocketAddress): boolean;
    resolve(arg0: SocketAddress): Future<T>;
    resolve(arg0: SocketAddress, arg1: Promise<T>): Future<T>;
    resolveAll(arg0: SocketAddress): Future<T[]>;
    resolveAll(arg0: SocketAddress, arg1: Promise<T[]>): Future<T[]>;
}
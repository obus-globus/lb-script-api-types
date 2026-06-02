import type { Future } from '../../../io/netty/util/concurrent/Future.d.ts'
import type { Promise } from '../../../io/netty/util/concurrent/Promise.d.ts'
import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface AddressResolver<T extends SocketAddress> extends Closeable, Object{
    close(): void;
    isResolved(arg0: SocketAddress): boolean;
    isSupported(arg0: SocketAddress): boolean;
    resolve(arg0: SocketAddress): Future<T>;
    resolve(arg0: SocketAddress, arg1: Promise<T>): Future<T>;
    resolveAll(arg0: SocketAddress): Future<T[]>;
    resolveAll(arg0: SocketAddress, arg1: Promise<T[]>): Future<T[]>;
}
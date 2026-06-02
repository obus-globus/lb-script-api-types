import type { Future } from '../../../io/netty/util/concurrent/Future.d.ts'
import type { Promise } from '../../../io/netty/util/concurrent/Promise.d.ts'
import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface NameResolver<T extends Object | number | string | boolean> extends Closeable, Object{
    close(): void;
    resolve(arg0: string): Future<T>;
    resolve(arg0: string, arg1: Promise<T>): Future<T>;
    resolveAll(arg0: string): Future<T[]>;
    resolveAll(arg0: string, arg1: Promise<T[]>): Future<T[]>;
}
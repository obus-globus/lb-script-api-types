import type { NameResolver } from '../../../io/netty/resolver/NameResolver.d.ts'
import type { Future } from '../../../io/netty/util/concurrent/Future.d.ts'
import type { Promise } from '../../../io/netty/util/concurrent/Promise.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class SimpleNameResolver<T extends unknown> extends Object implements NameResolver<T> {
    constructor(arg0: (Object | null)[])
    // private executor: (Object | null)[];
    close(): void;
    doResolve(arg0: string, arg1: Promise<T>): void;
    doResolveAll(arg0: string, arg1: Promise<T[]>): void;
    executor(): (Object | null)[];
    resolve(arg0: string): Future<T>;
    resolve(arg0: string, arg1: Promise<T>): Future<T>;
    resolveAll(arg0: string): Future<T[]>;
    resolveAll(arg0: string, arg1: Promise<T[]>): Future<T[]>;
}
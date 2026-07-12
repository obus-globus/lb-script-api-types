import type { NameResolver } from '../../../io/netty/resolver/NameResolver.d.ts'
import type { SimpleNameResolver } from '../../../io/netty/resolver/SimpleNameResolver.d.ts'
import type { Promise } from '../../../io/netty/util/concurrent/Promise.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class CompositeNameResolver<T extends unknown> extends SimpleNameResolver<T> {
    constructor(arg0: (Object | null)[], ...arg1: NameResolver<T>[])
    // private resolvers: NameResolver<T>[];
    doResolve(arg0: string, arg1: Promise<T>): void;
    doResolveAll(arg0: string, arg1: Promise<T[]>): void;
    // private doResolveAllRec(arg0: string, arg1: Promise<T[]>, arg2: number, arg3: Throwable): void;
    // private doResolveRec(arg0: string, arg1: Promise<T>, arg2: number, arg3: Throwable): void;
}
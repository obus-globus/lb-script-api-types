import type { PoolArena } from '../../../io/netty/buffer/PoolArena.d.ts'
import type { PoolThreadCache } from '../../../io/netty/buffer/PoolThreadCache.d.ts'
import type { FastThreadLocal } from '../../../io/netty/util/concurrent/FastThreadLocal.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class PooledByteBufAllocator$PoolThreadLocalCache extends FastThreadLocal<PoolThreadCache> {
    static destroy(): void;
    static removeAll(): void;
    static size(): number;
    constructor(null_: PooledByteBufAllocator$PoolThreadLocalCache, arg1: boolean)
    // private useCacheForAllThreads: boolean;
    initialValue(): PoolThreadCache;
    // private leastUsedArena<T extends Object | number | string | boolean>(arg0: PoolArena<T>[]): PoolArena<T>;
    onRemoval(arg0: PoolThreadCache): void;
}
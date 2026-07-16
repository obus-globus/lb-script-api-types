import type { AbstractByteBufAllocator } from '../../../io/netty/buffer/AbstractByteBufAllocator.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocatorMetricProvider } from '../../../io/netty/buffer/ByteBufAllocatorMetricProvider.d.ts'
import type { PoolArena } from '../../../io/netty/buffer/PoolArena.d.ts'
import type { PoolArenaMetric } from '../../../io/netty/buffer/PoolArenaMetric.d.ts'
import type { PoolThreadCache } from '../../../io/netty/buffer/PoolThreadCache.d.ts'
import type { PooledByteBufAllocator$PoolThreadLocalCache } from '../../../io/netty/buffer/PooledByteBufAllocator$PoolThreadLocalCache.d.ts'
import type { PooledByteBufAllocatorMetric } from '../../../io/netty/buffer/PooledByteBufAllocatorMetric.d.ts'
import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
export class PooledByteBufAllocator extends AbstractByteBufAllocator implements ByteBufAllocatorMetricProvider {
    static DEFAULT: PooledByteBufAllocator;
    static defaultDisableCacheFinalizersForFastThreadLocalThreads(): boolean;
    static defaultMaxOrder(): number;
    static defaultNormalCacheSize(): number;
    static defaultNumDirectArena(): number;
    static defaultNumHeapArena(): number;
    static defaultPageSize(): number;
    static defaultPreferDirect(): boolean;
    static defaultSmallCacheSize(): number;
    static defaultTinyCacheSize(): number;
    static defaultUseCacheForAllThreads(): boolean;
    static isDirectMemoryCacheAlignmentSupported(): boolean;
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number)
    constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean)
    constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number)
    constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number)
    constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean)
    constructor(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    // private chunkSize: number;
    // private directArenaMetrics: PoolArenaMetric[];
    // private directArenas: PoolArena<ByteBuffer>[];
    // private heapArenaMetrics: PoolArenaMetric[];
    // private heapArenas: PoolArena<number[]>[];
    // private metric: PooledByteBufAllocatorMetric;
    // private normalCacheSize: number;
    // private smallCacheSize: number;
    // private threadCache: PooledByteBufAllocator$PoolThreadLocalCache;
    // private trimTask: () => void;
    chunkSize(): number;
    directArenas(): PoolArenaMetric[];
    dumpStats(): string;
    freeThreadLocalCache(): void;
    hasThreadLocalCache(): boolean;
    heapArenas(): PoolArenaMetric[];
    isDirectBufferPooled(): boolean;
    metric(): PooledByteBufAllocatorMetric;
    newDirectBuffer(arg0: number, arg1: number): ByteBuf;
    newHeapBuffer(arg0: number, arg1: number): ByteBuf;
    normalCacheSize(): number;
    numDirectArenas(): number;
    numHeapArenas(): number;
    numThreadLocalCaches(): number;
    pinnedDirectMemory(): number;
    pinnedHeapMemory(): number;
    smallCacheSize(): number;
    threadCache(): PoolThreadCache;
    tinyCacheSize(): number;
    trimCurrentThreadCache(): boolean;
    usedDirectMemory(): number;
    usedHeapMemory(): number;
}
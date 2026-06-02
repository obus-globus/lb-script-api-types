import type { ByteBufAllocatorMetric } from '../../../io/netty/buffer/ByteBufAllocatorMetric.d.ts'
import type { PoolArenaMetric } from '../../../io/netty/buffer/PoolArenaMetric.d.ts'
import type { PooledByteBufAllocator } from '../../../io/netty/buffer/PooledByteBufAllocator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class PooledByteBufAllocatorMetric extends Object implements ByteBufAllocatorMetric {
    constructor(arg0: PooledByteBufAllocator)
    // private allocator: PooledByteBufAllocator;
    chunkSize(): number;
    directArenas(): PoolArenaMetric[];
    heapArenas(): PoolArenaMetric[];
    normalCacheSize(): number;
    numDirectArenas(): number;
    numHeapArenas(): number;
    numThreadLocalCaches(): number;
    smallCacheSize(): number;
    tinyCacheSize(): number;
    toString(): string;
    usedDirectMemory(): number;
    usedHeapMemory(): number;
}
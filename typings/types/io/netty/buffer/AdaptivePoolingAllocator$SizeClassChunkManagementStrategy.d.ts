import type { AdaptivePoolingAllocator$ChunkCache } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkCache.d.ts'
import type { AdaptivePoolingAllocator$ChunkController } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkController.d.ts'
import type { AdaptivePoolingAllocator$ChunkManagementStrategy } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkManagementStrategy.d.ts'
import type { AdaptivePoolingAllocator$MagazineGroup } from '../../../io/netty/buffer/AdaptivePoolingAllocator$MagazineGroup.d.ts'
import type { FastThreadLocal } from '../../../io/netty/util/concurrent/FastThreadLocal.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AdaptivePoolingAllocator$SizeClassChunkManagementStrategy extends Object implements AdaptivePoolingAllocator$ChunkManagementStrategy {
    constructor(arg0: number, arg1: FastThreadLocal<AdaptivePoolingAllocator$MagazineGroup[]>)
    // private chunkSize: number;
    // private segmentSize: number;
    createChunkCache(arg0: boolean): AdaptivePoolingAllocator$ChunkCache;
    createController(arg0: AdaptivePoolingAllocator$MagazineGroup): AdaptivePoolingAllocator$ChunkController;
}
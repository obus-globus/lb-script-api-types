import type { AdaptivePoolingAllocator$Chunk } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Chunk.d.ts'
import type { AdaptivePoolingAllocator$ChunkCache } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkCache.d.ts'
import type { AdaptivePoolingAllocator$MagazineGroup } from '../../../io/netty/buffer/AdaptivePoolingAllocator$MagazineGroup.d.ts'
import type { AdaptivePoolingAllocator$SizeClassedChunk } from '../../../io/netty/buffer/AdaptivePoolingAllocator$SizeClassedChunk.d.ts'
import type { FastThreadLocal } from '../../../io/netty/util/concurrent/FastThreadLocal.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AdaptivePoolingAllocator$ConcurrentQueueChunkCache extends Object implements AdaptivePoolingAllocator$ChunkCache {
    constructor(arg0: FastThreadLocal<AdaptivePoolingAllocator$MagazineGroup[]>)
    // private queue: AdaptivePoolingAllocator$SizeClassedChunk[];
    offerChunk(arg0: AdaptivePoolingAllocator$Chunk): boolean;
    pollChunk(arg0: number): AdaptivePoolingAllocator$SizeClassedChunk;
}
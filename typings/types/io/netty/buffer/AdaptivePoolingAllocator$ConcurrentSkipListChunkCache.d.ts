import type { AdaptivePoolingAllocator$Chunk } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Chunk.d.ts'
import type { AdaptivePoolingAllocator$ChunkCache } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkCache.d.ts'
import type { AdaptivePoolingAllocator$MagazineGroup } from '../../../io/netty/buffer/AdaptivePoolingAllocator$MagazineGroup.d.ts'
import type { ConcurrentSkipListIntObjMultimap$IntEntry } from '../../../io/netty/util/concurrent/ConcurrentSkipListIntObjMultimap$IntEntry.d.ts'
import type { FastThreadLocal } from '../../../io/netty/util/concurrent/FastThreadLocal.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AdaptivePoolingAllocator$ConcurrentSkipListChunkCache extends Object implements AdaptivePoolingAllocator$ChunkCache {
    constructor(arg0: FastThreadLocal<AdaptivePoolingAllocator$MagazineGroup[]>)
    // private chunks: ConcurrentSkipListIntObjMultimap$IntEntry<AdaptivePoolingAllocator$Chunk>[];
    offerChunk(arg0: AdaptivePoolingAllocator$Chunk): boolean;
    pollChunk(arg0: number): AdaptivePoolingAllocator$Chunk;
}
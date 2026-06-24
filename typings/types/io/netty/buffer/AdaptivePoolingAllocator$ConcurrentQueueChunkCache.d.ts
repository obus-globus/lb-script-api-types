import type { AdaptivePoolingAllocator$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { AdaptivePoolingAllocator$Chunk } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Chunk.d.ts'
import type { AdaptivePoolingAllocator$ChunkCache } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkCache.d.ts'
import type { AdaptivePoolingAllocator$SizeClassedChunk } from '../../../io/netty/buffer/AdaptivePoolingAllocator$SizeClassedChunk.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AdaptivePoolingAllocator$ConcurrentQueueChunkCache extends Object implements AdaptivePoolingAllocator$ChunkCache {
    private constructor()
    constructor(arg0: AdaptivePoolingAllocator$1)
    // private queue: AdaptivePoolingAllocator$SizeClassedChunk[];
    offerChunk(arg0: AdaptivePoolingAllocator$Chunk): boolean;
    pollChunk(arg0: number): AdaptivePoolingAllocator$SizeClassedChunk;
}
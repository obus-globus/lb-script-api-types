import type { AdaptivePoolingAllocator$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { AdaptivePoolingAllocator$ChunkCache } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkCache.d.ts'
import type { AdaptivePoolingAllocator$ChunkController } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkController.d.ts'
import type { AdaptivePoolingAllocator$ChunkManagementStrategy } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkManagementStrategy.d.ts'
import type { AdaptivePoolingAllocator$MagazineGroup } from '../../../io/netty/buffer/AdaptivePoolingAllocator$MagazineGroup.d.ts'
import type { AtomicInteger } from '../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AdaptivePoolingAllocator$BuddyChunkManagementStrategy extends Object implements AdaptivePoolingAllocator$ChunkManagementStrategy {
    private constructor()
    constructor(arg0: AdaptivePoolingAllocator$1)
    // private maxChunkSize: AtomicInteger;
    createChunkCache(arg0: boolean): AdaptivePoolingAllocator$ChunkCache;
    createController(arg0: AdaptivePoolingAllocator$MagazineGroup): AdaptivePoolingAllocator$ChunkController;
}
import type { AdaptivePoolingAllocator$ChunkCache } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkCache.d.ts'
import type { AdaptivePoolingAllocator$ChunkController } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkController.d.ts'
import type { AdaptivePoolingAllocator$MagazineGroup } from '../../../io/netty/buffer/AdaptivePoolingAllocator$MagazineGroup.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface AdaptivePoolingAllocator$ChunkManagementStrategy extends Object{
    createChunkCache(arg0: boolean): AdaptivePoolingAllocator$ChunkCache;
    createController(arg0: AdaptivePoolingAllocator$MagazineGroup): AdaptivePoolingAllocator$ChunkController;
}
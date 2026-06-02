import type { AdaptivePoolingAllocator$ChunkController } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkController.d.ts'
import type { AdaptivePoolingAllocator$MagazineGroup } from '../../../io/netty/buffer/AdaptivePoolingAllocator$MagazineGroup.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface AdaptivePoolingAllocator$ChunkControllerFactory extends Object{
    create(arg0: AdaptivePoolingAllocator$MagazineGroup): AdaptivePoolingAllocator$ChunkController;
}
import type { AdaptivePoolingAllocator$ChunkController } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkController.d.ts'
import type { AdaptivePoolingAllocator$ChunkControllerFactory } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkControllerFactory.d.ts'
import type { AdaptivePoolingAllocator$MagazineGroup } from '../../../io/netty/buffer/AdaptivePoolingAllocator$MagazineGroup.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AdaptivePoolingAllocator$SizeClassChunkControllerFactory extends Object implements AdaptivePoolingAllocator$ChunkControllerFactory {
    private constructor(arg0: number)
    // private chunkSize: number;
    // private segmentOffsets: number[];
    // private segmentSize: number;
    create(arg0: AdaptivePoolingAllocator$MagazineGroup): AdaptivePoolingAllocator$ChunkController;
}
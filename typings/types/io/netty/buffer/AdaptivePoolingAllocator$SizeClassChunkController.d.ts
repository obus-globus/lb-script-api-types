import type { AdaptivePoolingAllocator$Chunk } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Chunk.d.ts'
import type { AdaptivePoolingAllocator$ChunkAllocator } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkAllocator.d.ts'
import type { AdaptivePoolingAllocator$ChunkController } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkController.d.ts'
import type { AdaptivePoolingAllocator$ChunkRegistry } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkRegistry.d.ts'
import type { AdaptivePoolingAllocator$IntStack } from '../../../io/netty/buffer/AdaptivePoolingAllocator$IntStack.d.ts'
import type { AdaptivePoolingAllocator$Magazine } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Magazine.d.ts'
import type { AdaptivePoolingAllocator$MagazineGroup } from '../../../io/netty/buffer/AdaptivePoolingAllocator$MagazineGroup.d.ts'
import type { MpscIntQueue } from '../../../io/netty/util/concurrent/MpscIntQueue.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AdaptivePoolingAllocator$SizeClassChunkController extends Object implements AdaptivePoolingAllocator$ChunkController {
    private constructor(arg0: AdaptivePoolingAllocator$MagazineGroup, arg1: number, arg2: number)
    // private chunkAllocator: AdaptivePoolingAllocator$ChunkAllocator;
    // private chunkRegistry: AdaptivePoolingAllocator$ChunkRegistry;
    // private chunkSize: number;
    // private segmentSize: number;
    computeBufferCapacity(arg0: number, arg1: number, arg2: boolean): number;
    // private createEmptyFreeList(): MpscIntQueue;
    // private createFreeList(): MpscIntQueue;
    // private createLocalFreeList(): AdaptivePoolingAllocator$IntStack;
    newChunkAllocation(arg0: number, arg1: AdaptivePoolingAllocator$Magazine): AdaptivePoolingAllocator$Chunk;
}
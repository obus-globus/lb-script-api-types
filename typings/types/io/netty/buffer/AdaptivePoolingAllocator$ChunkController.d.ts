import type { AdaptivePoolingAllocator$Chunk } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Chunk.d.ts'
import type { AdaptivePoolingAllocator$Magazine } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Magazine.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface AdaptivePoolingAllocator$ChunkController extends Object{
    computeBufferCapacity(arg0: number, arg1: number, arg2: boolean): number;
    initializeSharedStateIn(arg0: AdaptivePoolingAllocator$ChunkController): void;
    newChunkAllocation(arg0: number, arg1: AdaptivePoolingAllocator$Magazine): AdaptivePoolingAllocator$Chunk;
}
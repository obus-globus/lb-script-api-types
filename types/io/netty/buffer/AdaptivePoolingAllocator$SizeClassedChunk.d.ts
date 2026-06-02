import type { AbstractByteBuf } from '../../../io/netty/buffer/AbstractByteBuf.d.ts'
import type { AdaptivePoolingAllocator$AdaptiveByteBuf } from '../../../io/netty/buffer/AdaptivePoolingAllocator$AdaptiveByteBuf.d.ts'
import type { AdaptivePoolingAllocator$Chunk } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Chunk.d.ts'
import type { AdaptivePoolingAllocator$ChunkReleasePredicate } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkReleasePredicate.d.ts'
import type { AdaptivePoolingAllocator$Magazine } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Magazine.d.ts'
import type { MpscIntQueue } from '../../../io/netty/util/concurrent/MpscIntQueue.d.ts'
export class AdaptivePoolingAllocator$SizeClassedChunk extends AdaptivePoolingAllocator$Chunk {
    constructor(arg0: AbstractByteBuf, arg1: AdaptivePoolingAllocator$Magazine, arg2: boolean, arg3: number, arg4: number[], arg5: AdaptivePoolingAllocator$ChunkReleasePredicate)
    // private freeList: MpscIntQueue;
    // private segmentSize: number;
    readInitInto(arg0: AdaptivePoolingAllocator$AdaptiveByteBuf, arg1: number, arg2: number, arg3: number): void;
    releaseFromMagazine(): boolean;
    releaseSegment(arg0: number): boolean;
    remainingCapacity(): number;
}
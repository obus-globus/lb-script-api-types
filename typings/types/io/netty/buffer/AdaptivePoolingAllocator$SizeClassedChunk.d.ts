import type { AbstractByteBuf } from '../../../io/netty/buffer/AbstractByteBuf.d.ts'
import type { AdaptivePoolingAllocator$AdaptiveByteBuf } from '../../../io/netty/buffer/AdaptivePoolingAllocator$AdaptiveByteBuf.d.ts'
import type { AdaptivePoolingAllocator$Chunk } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Chunk.d.ts'
import type { AdaptivePoolingAllocator$IntStack } from '../../../io/netty/buffer/AdaptivePoolingAllocator$IntStack.d.ts'
import type { AdaptivePoolingAllocator$Magazine } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Magazine.d.ts'
import type { AdaptivePoolingAllocator$SizeClassChunkController } from '../../../io/netty/buffer/AdaptivePoolingAllocator$SizeClassChunkController.d.ts'
import type { MpscIntQueue } from '../../../io/netty/util/concurrent/MpscIntQueue.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
export class AdaptivePoolingAllocator$SizeClassedChunk extends AdaptivePoolingAllocator$Chunk {
    constructor(arg0: AbstractByteBuf, arg1: AdaptivePoolingAllocator$Magazine, arg2: AdaptivePoolingAllocator$SizeClassChunkController)
    // private externalFreeList: MpscIntQueue;
    // private localFreeList: AdaptivePoolingAllocator$IntStack;
    // private ownerThread: Thread;
    // private segmentSize: number;
    // private segments: number;
    // private state: number;
    // private deallocateIfNeeded(arg0: number): void;
    hasRemainingCapacity(): boolean;
    markToDeallocate(): void;
    // private nextAvailableSegmentOffset(): number;
    readInitInto(arg0: AdaptivePoolingAllocator$AdaptiveByteBuf, arg1: number, arg2: number, arg3: number): boolean;
    releaseSegment(arg0: number, arg1: number): void;
    // private releaseSegmentOffsetIntoFreeList(arg0: number): void;
    remainingCapacity(): number;
    // private updateRemainingCapacity(arg0: number): number;
    // private updateStateOnLocalReleaseSegment(arg0: number, arg1: AdaptivePoolingAllocator$IntStack): void;
}
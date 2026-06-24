import type { AbstractByteBuf } from '../../../io/netty/buffer/AbstractByteBuf.d.ts'
import type { AdaptivePoolingAllocator$AdaptiveByteBuf } from '../../../io/netty/buffer/AdaptivePoolingAllocator$AdaptiveByteBuf.d.ts'
import type { AdaptivePoolingAllocator$Chunk } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Chunk.d.ts'
import type { AdaptivePoolingAllocator$Magazine } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Magazine.d.ts'
import type { MpscIntQueue } from '../../../io/netty/util/concurrent/MpscIntQueue.d.ts'
import type { IntConsumer } from '../../../java/util/function/IntConsumer.d.ts'
export class AdaptivePoolingAllocator$BuddyChunk extends AdaptivePoolingAllocator$Chunk implements IntConsumer {
    constructor(arg0: AbstractByteBuf, arg1: AdaptivePoolingAllocator$Magazine)
    // private buddies: number[];
    // private freeList: MpscIntQueue;
    // private freeListCapacity: number;
    accept(arg0: number): void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
    // private chooseFirstFreeBuddy(arg0: number, arg1: number, arg2: number): number;
    hasUnprocessedFreelistEntries(): boolean;
    processFreelistEntries(): void;
    readInitInto(arg0: AdaptivePoolingAllocator$AdaptiveByteBuf, arg1: number, arg2: number, arg3: number): boolean;
    releaseSegment(arg0: number, arg1: number): void;
    remainingCapacity(): number;
    toString(): string;
    // private unreserveMatchingBuddy(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
}
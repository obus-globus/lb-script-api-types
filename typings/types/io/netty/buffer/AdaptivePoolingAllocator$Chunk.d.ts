import type { AbstractByteBuf } from '../../../io/netty/buffer/AbstractByteBuf.d.ts'
import type { AdaptivePoolingAllocator } from '../../../io/netty/buffer/AdaptivePoolingAllocator.d.ts'
import type { AdaptivePoolingAllocator$AdaptiveByteBuf } from '../../../io/netty/buffer/AdaptivePoolingAllocator$AdaptiveByteBuf.d.ts'
import type { AdaptivePoolingAllocator$Magazine } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Magazine.d.ts'
import type { ChunkInfo } from '../../../io/netty/buffer/ChunkInfo.d.ts'
import type { RefCnt } from '../../../io/netty/util/internal/RefCnt.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AdaptivePoolingAllocator$Chunk extends Object implements ChunkInfo {
    constructor()
    constructor(arg0: AbstractByteBuf, arg1: AdaptivePoolingAllocator$Magazine, arg2: boolean)
    // private allocatedBytes: number;
    // private allocator: AdaptivePoolingAllocator;
    // private capacity: number;
    // private delegate: AbstractByteBuf;
    // private magazine: AdaptivePoolingAllocator$Magazine;
    // private pooled: boolean;
    // private refCnt: RefCnt;
    attachToMagazine(arg0: AdaptivePoolingAllocator$Magazine): void;
    capacity(): number;
    currentMagazine(): AdaptivePoolingAllocator$Magazine;
    deallocate(): void;
    detachFromMagazine(): void;
    hasUnprocessedFreelistEntries(): boolean;
    isDirect(): boolean;
    markToDeallocate(): void;
    memoryAddress(): number;
    // private onRelease(): void;
    processFreelistEntries(): void;
    readInitInto(arg0: AdaptivePoolingAllocator$AdaptiveByteBuf, arg1: number, arg2: number, arg3: number): boolean;
    release(): boolean;
    releaseFromMagazine(): void;
    releaseSegment(arg0: number, arg1: number): void;
    remainingCapacity(): number;
    // private retain(): void;
}
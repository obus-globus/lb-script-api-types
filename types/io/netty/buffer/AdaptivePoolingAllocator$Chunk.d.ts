import type { AbstractByteBuf } from '../../../io/netty/buffer/AbstractByteBuf.d.ts'
import type { AdaptivePoolingAllocator } from '../../../io/netty/buffer/AdaptivePoolingAllocator.d.ts'
import type { AdaptivePoolingAllocator$AdaptiveByteBuf } from '../../../io/netty/buffer/AdaptivePoolingAllocator$AdaptiveByteBuf.d.ts'
import type { AdaptivePoolingAllocator$ChunkReleasePredicate } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkReleasePredicate.d.ts'
import type { AdaptivePoolingAllocator$Magazine } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Magazine.d.ts'
import type { ChunkInfo } from '../../../io/netty/buffer/ChunkInfo.d.ts'
import type { ReferenceCounted } from '../../../io/netty/util/ReferenceCounted.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AdaptivePoolingAllocator$Chunk extends Object implements ChunkInfo, ReferenceCounted {
    constructor()
    constructor(arg0: AbstractByteBuf, arg1: AdaptivePoolingAllocator$Magazine, arg2: boolean, arg3: AdaptivePoolingAllocator$ChunkReleasePredicate)
    // private allocatedBytes: number;
    // private allocator: AdaptivePoolingAllocator;
    // private capacity: number;
    // private chunkReleasePredicate: AdaptivePoolingAllocator$ChunkReleasePredicate;
    // private delegate: AbstractByteBuf;
    // private magazine: AdaptivePoolingAllocator$Magazine;
    // private pooled: boolean;
    // private refCnt: number;
    attachToMagazine(arg0: AdaptivePoolingAllocator$Magazine): void;
    capacity(): number;
    currentMagazine(): AdaptivePoolingAllocator$Magazine;
    // private deallocate(): void;
    detachFromMagazine(): void;
    isDirect(): boolean;
    memoryAddress(): number;
    // private onRelease(): void;
    // private onReturn(arg0: boolean): void;
    readInitInto(arg0: AdaptivePoolingAllocator$AdaptiveByteBuf, arg1: number, arg2: number, arg3: number): void;
    refCnt(): number;
    release(): boolean;
    release(arg0: number): boolean;
    releaseFromMagazine(): boolean;
    releaseSegment(arg0: number): boolean;
    remainingCapacity(): number;
    retain(): AdaptivePoolingAllocator$Chunk;
    retain(arg0: number): AdaptivePoolingAllocator$Chunk;
    touch(): AdaptivePoolingAllocator$Chunk;
    touch(arg0: Object): AdaptivePoolingAllocator$Chunk;
}
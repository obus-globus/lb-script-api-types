import type { AdaptivePoolingAllocator$AdaptiveByteBuf } from '../../../io/netty/buffer/AdaptivePoolingAllocator$AdaptiveByteBuf.d.ts'
import type { AdaptivePoolingAllocator$Chunk } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Chunk.d.ts'
import type { AdaptivePoolingAllocator$ChunkController } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkController.d.ts'
import type { AdaptivePoolingAllocator$MagazineGroup } from '../../../io/netty/buffer/AdaptivePoolingAllocator$MagazineGroup.d.ts'
import type { ObjectPool$Handle } from '../../../io/netty/util/internal/ObjectPool$Handle.d.ts'
import type { StampedLock } from '../../../java/util/concurrent/locks/StampedLock.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AdaptivePoolingAllocator$Magazine extends Object {
    constructor(arg0: AdaptivePoolingAllocator$MagazineGroup, arg1: boolean, arg2: AdaptivePoolingAllocator$Chunk[], arg3: AdaptivePoolingAllocator$ChunkController)
    // private allocationLock: StampedLock;
    // private bufferQueue: AdaptivePoolingAllocator$AdaptiveByteBuf[];
    // private chunkController: AdaptivePoolingAllocator$ChunkController;
    // private current: AdaptivePoolingAllocator$Chunk;
    // private group: AdaptivePoolingAllocator$MagazineGroup;
    // private handle: ObjectPool$Handle<AdaptivePoolingAllocator$AdaptiveByteBuf>;
    // private nextInLine: AdaptivePoolingAllocator$Chunk;
    // private sharedChunkQueue: AdaptivePoolingAllocator$Chunk[];
    // private allocate(arg0: number, arg1: number, arg2: AdaptivePoolingAllocator$AdaptiveByteBuf, arg3: boolean): boolean;
    // private allocateWithoutLock(arg0: number, arg1: number, arg2: AdaptivePoolingAllocator$AdaptiveByteBuf): boolean;
    free(): void;
    initializeSharedStateIn(arg0: AdaptivePoolingAllocator$Magazine): void;
    newBuffer(): AdaptivePoolingAllocator$AdaptiveByteBuf;
    offerToQueue(arg0: AdaptivePoolingAllocator$Chunk): boolean;
    // private restoreMagazineFreed(): void;
    // private transferToNextInLineOrRelease(arg0: AdaptivePoolingAllocator$Chunk): void;
    tryAllocate(arg0: number, arg1: number, arg2: AdaptivePoolingAllocator$AdaptiveByteBuf, arg3: boolean): boolean;
    trySetNextInLine(arg0: AdaptivePoolingAllocator$Chunk): boolean;
}
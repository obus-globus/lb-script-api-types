import type { AdaptivePoolingAllocator$AdaptiveByteBuf } from '../../../io/netty/buffer/AdaptivePoolingAllocator$AdaptiveByteBuf.d.ts'
import type { AdaptivePoolingAllocator$Chunk } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Chunk.d.ts'
import type { AdaptivePoolingAllocator$ChunkController } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkController.d.ts'
import type { AdaptivePoolingAllocator$Magazine$AdaptiveRecycler } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Magazine$AdaptiveRecycler.d.ts'
import type { AdaptivePoolingAllocator$MagazineGroup } from '../../../io/netty/buffer/AdaptivePoolingAllocator$MagazineGroup.d.ts'
import type { StampedLock } from '../../../java/util/concurrent/locks/StampedLock.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AdaptivePoolingAllocator$Magazine extends Object {
    constructor(arg0: AdaptivePoolingAllocator$MagazineGroup, arg1: boolean, arg2: AdaptivePoolingAllocator$ChunkController)
    // private allocationLock: StampedLock;
    // private chunkController: AdaptivePoolingAllocator$ChunkController;
    // private current: AdaptivePoolingAllocator$Chunk;
    // private group: AdaptivePoolingAllocator$MagazineGroup;
    // private nextInLine: AdaptivePoolingAllocator$Chunk;
    // private recycler: AdaptivePoolingAllocator$Magazine$AdaptiveRecycler;
    // private allocate(arg0: number, arg1: number, arg2: AdaptivePoolingAllocator$AdaptiveByteBuf, arg3: boolean): boolean;
    // private allocateWithoutLock(arg0: number, arg1: number, arg2: AdaptivePoolingAllocator$AdaptiveByteBuf): boolean;
    free(): void;
    newBuffer(): AdaptivePoolingAllocator$AdaptiveByteBuf;
    offerToQueue(arg0: AdaptivePoolingAllocator$Chunk): boolean;
    // private restoreMagazineFreed(): void;
    // private transferToNextInLineOrRelease(arg0: AdaptivePoolingAllocator$Chunk): void;
    tryAllocate(arg0: number, arg1: number, arg2: AdaptivePoolingAllocator$AdaptiveByteBuf, arg3: boolean): boolean;
}
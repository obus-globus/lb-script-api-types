import type { AdaptivePoolingAllocator } from '../../../io/netty/buffer/AdaptivePoolingAllocator.d.ts'
import type { AdaptivePoolingAllocator$AdaptiveByteBuf } from '../../../io/netty/buffer/AdaptivePoolingAllocator$AdaptiveByteBuf.d.ts'
import type { AdaptivePoolingAllocator$Chunk } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Chunk.d.ts'
import type { AdaptivePoolingAllocator$ChunkAllocator } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkAllocator.d.ts'
import type { AdaptivePoolingAllocator$ChunkControllerFactory } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkControllerFactory.d.ts'
import type { AdaptivePoolingAllocator$Magazine } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Magazine.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { StampedLock } from '../../../java/util/concurrent/locks/StampedLock.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AdaptivePoolingAllocator$MagazineGroup extends Object {
    constructor(arg0: AdaptivePoolingAllocator, arg1: AdaptivePoolingAllocator$ChunkAllocator, arg2: AdaptivePoolingAllocator$ChunkControllerFactory, arg3: boolean)
    // private allocator: AdaptivePoolingAllocator;
    // private chunkAllocator: AdaptivePoolingAllocator$ChunkAllocator;
    // private chunkControllerFactory: AdaptivePoolingAllocator$ChunkControllerFactory;
    // private chunkReuseQueue: AdaptivePoolingAllocator$Chunk[];
    // private freed: boolean;
    // private magazineExpandLock: StampedLock;
    // private magazines: AdaptivePoolingAllocator$Magazine[];
    // private threadLocalMagazine: AdaptivePoolingAllocator$Magazine;
    allocate(arg0: number, arg1: number, arg2: Thread, arg3: AdaptivePoolingAllocator$AdaptiveByteBuf): AdaptivePoolingAllocator$AdaptiveByteBuf;
    // private free(): void;
    // private freeChunkReuseQueue(): void;
    offerToQueue(arg0: AdaptivePoolingAllocator$Chunk): boolean;
    // private tryExpandMagazines(arg0: number): boolean;
}
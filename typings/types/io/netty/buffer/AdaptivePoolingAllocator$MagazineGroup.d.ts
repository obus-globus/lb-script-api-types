import type { AdaptivePoolingAllocator } from '../../../io/netty/buffer/AdaptivePoolingAllocator.d.ts'
import type { AdaptivePoolingAllocator$AdaptiveByteBuf } from '../../../io/netty/buffer/AdaptivePoolingAllocator$AdaptiveByteBuf.d.ts'
import type { AdaptivePoolingAllocator$Chunk } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Chunk.d.ts'
import type { AdaptivePoolingAllocator$ChunkAllocator } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkAllocator.d.ts'
import type { AdaptivePoolingAllocator$ChunkCache } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkCache.d.ts'
import type { AdaptivePoolingAllocator$ChunkManagementStrategy } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkManagementStrategy.d.ts'
import type { AdaptivePoolingAllocator$Magazine } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Magazine.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { StampedLock } from '../../../java/util/concurrent/locks/StampedLock.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AdaptivePoolingAllocator$MagazineGroup extends Object {
    constructor(arg0: AdaptivePoolingAllocator, arg1: AdaptivePoolingAllocator$ChunkAllocator, arg2: AdaptivePoolingAllocator$ChunkManagementStrategy, arg3: boolean)
    // private allocator: AdaptivePoolingAllocator;
    // private chunkAllocator: AdaptivePoolingAllocator$ChunkAllocator;
    // private chunkCache: AdaptivePoolingAllocator$ChunkCache;
    // private chunkManagementStrategy: AdaptivePoolingAllocator$ChunkManagementStrategy;
    // private freed: boolean;
    // private magazineExpandLock: StampedLock;
    // private magazines: AdaptivePoolingAllocator$Magazine[];
    // private ownerThread: Thread;
    // private threadLocalMagazine: AdaptivePoolingAllocator$Magazine;
    allocate(arg0: number, arg1: number, arg2: Thread, arg3: AdaptivePoolingAllocator$AdaptiveByteBuf): AdaptivePoolingAllocator$AdaptiveByteBuf;
    // private free(): void;
    // private freeChunkReuseQueue(arg0: Thread): void;
    offerChunk(arg0: AdaptivePoolingAllocator$Chunk): boolean;
    pollChunk(arg0: number): AdaptivePoolingAllocator$Chunk;
    // private tryExpandMagazines(arg0: number): boolean;
}
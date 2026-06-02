import type { AdaptivePoolingAllocator$AdaptiveByteBuf } from '../../../io/netty/buffer/AdaptivePoolingAllocator$AdaptiveByteBuf.d.ts'
import type { AdaptivePoolingAllocator$ChunkAllocator } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkAllocator.d.ts'
import type { AdaptivePoolingAllocator$ChunkRegistry } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkRegistry.d.ts'
import type { AdaptivePoolingAllocator$Magazine } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Magazine.d.ts'
import type { AdaptivePoolingAllocator$MagazineGroup } from '../../../io/netty/buffer/AdaptivePoolingAllocator$MagazineGroup.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { FastThreadLocal } from '../../../io/netty/util/concurrent/FastThreadLocal.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AdaptivePoolingAllocator extends Object {
    constructor(arg0: AdaptivePoolingAllocator$ChunkAllocator, arg1: boolean)
    // private chunkAllocator: AdaptivePoolingAllocator$ChunkAllocator;
    // private chunkRegistry: AdaptivePoolingAllocator$ChunkRegistry;
    // private largeBufferMagazineGroup: AdaptivePoolingAllocator$MagazineGroup;
    // private sizeClassedMagazineGroups: AdaptivePoolingAllocator$MagazineGroup[];
    // private threadLocalGroup: FastThreadLocal<AdaptivePoolingAllocator$MagazineGroup[]>;
    allocate(arg0: number, arg1: number): ByteBuf;
    // private allocate(arg0: number, arg1: number, arg2: Thread, arg3: AdaptivePoolingAllocator$AdaptiveByteBuf): AdaptivePoolingAllocator$AdaptiveByteBuf;
    // private allocateFallback(arg0: number, arg1: number, arg2: Thread, arg3: AdaptivePoolingAllocator$AdaptiveByteBuf): AdaptivePoolingAllocator$AdaptiveByteBuf;
    finalize(): void;
    // private free(): void;
    // private getFallbackMagazine(arg0: Thread): AdaptivePoolingAllocator$Magazine;
    reallocate(arg0: number, arg1: number, arg2: AdaptivePoolingAllocator$AdaptiveByteBuf): void;
    usedMemory(): number;
}
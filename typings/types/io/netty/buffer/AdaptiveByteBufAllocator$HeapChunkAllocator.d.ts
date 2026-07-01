import type { AbstractByteBuf } from '../../../io/netty/buffer/AbstractByteBuf.d.ts'
import type { AdaptivePoolingAllocator$ChunkAllocator } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkAllocator.d.ts'
import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AdaptiveByteBufAllocator$HeapChunkAllocator extends Object implements AdaptivePoolingAllocator$ChunkAllocator {
    constructor(arg0: ByteBufAllocator, arg1: any)
    // private allocator: ByteBufAllocator;
    allocate(arg0: number, arg1: number): AbstractByteBuf;
}
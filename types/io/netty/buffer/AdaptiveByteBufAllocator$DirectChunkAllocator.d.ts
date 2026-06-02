import type { AbstractByteBuf } from '../../../io/netty/buffer/AbstractByteBuf.d.ts'
import type { AdaptivePoolingAllocator$ChunkAllocator } from '../../../io/netty/buffer/AdaptivePoolingAllocator$ChunkAllocator.d.ts'
import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AdaptiveByteBufAllocator$DirectChunkAllocator extends Object implements AdaptivePoolingAllocator$ChunkAllocator {
    private constructor(arg0: ByteBufAllocator)
    // private allocator: ByteBufAllocator;
    allocate(arg0: number, arg1: number): AbstractByteBuf;
}
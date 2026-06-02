import type { AbstractByteBuf } from '../../../io/netty/buffer/AbstractByteBuf.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface AdaptivePoolingAllocator$ChunkAllocator extends Object{
    allocate(arg0: number, arg1: number): AbstractByteBuf;
}
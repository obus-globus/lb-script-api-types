import type { UnpooledByteBufAllocator } from '../../../io/netty/buffer/UnpooledByteBufAllocator.d.ts'
import type { UnpooledDirectByteBuf } from '../../../io/netty/buffer/UnpooledDirectByteBuf.d.ts'
import type { CleanableDirectBuffer } from '../../../io/netty/util/internal/CleanableDirectBuffer.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
export class UnpooledByteBufAllocator$InstrumentedUnpooledDirectByteBuf extends UnpooledDirectByteBuf {
    constructor(arg0: UnpooledByteBufAllocator, arg1: number, arg2: number)
    allocateDirect(arg0: number): ByteBuffer;
    allocateDirectBuffer(arg0: number): CleanableDirectBuffer;
    freeDirect(arg0: ByteBuffer): void;
}
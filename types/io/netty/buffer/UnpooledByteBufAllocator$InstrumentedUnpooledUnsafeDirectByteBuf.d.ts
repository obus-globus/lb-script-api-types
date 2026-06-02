import type { UnpooledByteBufAllocator } from '../../../io/netty/buffer/UnpooledByteBufAllocator.d.ts'
import type { UnpooledUnsafeDirectByteBuf } from '../../../io/netty/buffer/UnpooledUnsafeDirectByteBuf.d.ts'
import type { CleanableDirectBuffer } from '../../../io/netty/util/internal/CleanableDirectBuffer.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
export class UnpooledByteBufAllocator$InstrumentedUnpooledUnsafeDirectByteBuf extends UnpooledUnsafeDirectByteBuf {
    constructor(arg0: UnpooledByteBufAllocator, arg1: number, arg2: number)
    allocateDirect(arg0: number): ByteBuffer;
    allocateDirectBuffer(arg0: number): CleanableDirectBuffer;
    freeDirect(arg0: ByteBuffer): void;
}
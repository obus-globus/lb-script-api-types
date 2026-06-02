import type { UnpooledByteBufAllocator } from '../../../io/netty/buffer/UnpooledByteBufAllocator.d.ts'
import type { UnpooledUnsafeNoCleanerDirectByteBuf } from '../../../io/netty/buffer/UnpooledUnsafeNoCleanerDirectByteBuf.d.ts'
import type { CleanableDirectBuffer } from '../../../io/netty/util/internal/CleanableDirectBuffer.d.ts'
export class UnpooledByteBufAllocator$InstrumentedUnpooledUnsafeNoCleanerDirectByteBuf extends UnpooledUnsafeNoCleanerDirectByteBuf {
    constructor(arg0: UnpooledByteBufAllocator, arg1: number, arg2: number)
    allocateDirectBuffer(arg0: number): CleanableDirectBuffer;
    reallocateDirect(arg0: CleanableDirectBuffer, arg1: number): CleanableDirectBuffer;
}
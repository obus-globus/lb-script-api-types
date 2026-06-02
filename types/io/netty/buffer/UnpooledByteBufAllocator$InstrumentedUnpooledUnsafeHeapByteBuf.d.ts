import type { UnpooledByteBufAllocator } from '../../../io/netty/buffer/UnpooledByteBufAllocator.d.ts'
import type { UnpooledUnsafeHeapByteBuf } from '../../../io/netty/buffer/UnpooledUnsafeHeapByteBuf.d.ts'
export class UnpooledByteBufAllocator$InstrumentedUnpooledUnsafeHeapByteBuf extends UnpooledUnsafeHeapByteBuf {
    constructor(arg0: UnpooledByteBufAllocator, arg1: number, arg2: number)
    allocateArray(arg0: number): number[];
    freeArray(arg0: number[]): void;
}
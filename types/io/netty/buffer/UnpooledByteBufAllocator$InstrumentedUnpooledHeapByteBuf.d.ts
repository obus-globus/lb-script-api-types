import type { UnpooledByteBufAllocator } from '../../../io/netty/buffer/UnpooledByteBufAllocator.d.ts'
import type { UnpooledHeapByteBuf } from '../../../io/netty/buffer/UnpooledHeapByteBuf.d.ts'
export class UnpooledByteBufAllocator$InstrumentedUnpooledHeapByteBuf extends UnpooledHeapByteBuf {
    constructor(arg0: UnpooledByteBufAllocator, arg1: number, arg2: number)
    allocateArray(arg0: number): number[];
    freeArray(arg0: number[]): void;
}
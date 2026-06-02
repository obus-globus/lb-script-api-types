import type { AbstractByteBufAllocator } from '../../../io/netty/buffer/AbstractByteBufAllocator.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ByteBufAllocatorMetric } from '../../../io/netty/buffer/ByteBufAllocatorMetric.d.ts'
import type { ByteBufAllocatorMetricProvider } from '../../../io/netty/buffer/ByteBufAllocatorMetricProvider.d.ts'
import type { UnpooledByteBufAllocator$UnpooledByteBufAllocatorMetric } from '../../../io/netty/buffer/UnpooledByteBufAllocator$UnpooledByteBufAllocatorMetric.d.ts'
export class UnpooledByteBufAllocator extends AbstractByteBufAllocator implements ByteBufAllocatorMetricProvider {
    static DEFAULT: ByteBufAllocator;
    static DEFAULT: UnpooledByteBufAllocator;
    constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: boolean)
    constructor(arg0: boolean, arg1: boolean, arg2: boolean)
    // private disableLeakDetector: boolean;
    // private metric: UnpooledByteBufAllocator$UnpooledByteBufAllocatorMetric;
    // private noCleaner: boolean;
    compositeDirectBuffer(arg0: number): ByteBuf[];
    compositeHeapBuffer(arg0: number): ByteBuf[];
    decrementDirect(arg0: number): void;
    decrementHeap(arg0: number): void;
    incrementDirect(arg0: number): void;
    incrementHeap(arg0: number): void;
    isDirectBufferPooled(): boolean;
    metric(): ByteBufAllocatorMetric;
    newDirectBuffer(arg0: number, arg1: number): ByteBuf;
    newHeapBuffer(arg0: number, arg1: number): ByteBuf;
}
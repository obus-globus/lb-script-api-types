import type { AbstractByteBufAllocator } from '../../../io/netty/buffer/AbstractByteBufAllocator.d.ts'
import type { AdaptivePoolingAllocator } from '../../../io/netty/buffer/AdaptivePoolingAllocator.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { ByteBufAllocatorMetric } from '../../../io/netty/buffer/ByteBufAllocatorMetric.d.ts'
import type { ByteBufAllocatorMetricProvider } from '../../../io/netty/buffer/ByteBufAllocatorMetricProvider.d.ts'
export class AdaptiveByteBufAllocator extends AbstractByteBufAllocator implements ByteBufAllocatorMetric, ByteBufAllocatorMetricProvider {
    static DEFAULT: ByteBufAllocator;
    constructor()
    constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: boolean)
    // private direct: AdaptivePoolingAllocator;
    // private heap: AdaptivePoolingAllocator;
    isDirectBufferPooled(): boolean;
    metric(): ByteBufAllocatorMetric;
    newDirectBuffer(arg0: number, arg1: number): ByteBuf;
    newHeapBuffer(arg0: number, arg1: number): ByteBuf;
    usedDirectMemory(): number;
    usedHeapMemory(): number;
}
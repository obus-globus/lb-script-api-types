import type { ByteBufAllocatorMetric } from '../../../io/netty/buffer/ByteBufAllocatorMetric.d.ts'
import type { LongAdder } from '../../../java/util/concurrent/atomic/LongAdder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class UnpooledByteBufAllocator$UnpooledByteBufAllocatorMetric extends Object implements ByteBufAllocatorMetric {
    private constructor()
    // private directCounter: LongAdder;
    // private heapCounter: LongAdder;
    toString(): string;
    usedDirectMemory(): number;
    usedHeapMemory(): number;
}
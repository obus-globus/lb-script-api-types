import type { UnpooledByteBufAllocator$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ByteBufAllocatorMetric } from '../../../io/netty/buffer/ByteBufAllocatorMetric.d.ts'
import type { LongAdder } from '../../../java/util/concurrent/atomic/LongAdder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class UnpooledByteBufAllocator$UnpooledByteBufAllocatorMetric extends Object implements ByteBufAllocatorMetric {
    private constructor()
    constructor(arg0: UnpooledByteBufAllocator$1)
    // private directCounter: LongAdder;
    // private heapCounter: LongAdder;
    toString(): string;
    usedDirectMemory(): number;
    usedHeapMemory(): number;
}
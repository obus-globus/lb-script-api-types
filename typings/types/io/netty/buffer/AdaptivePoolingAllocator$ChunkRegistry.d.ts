import type { AdaptivePoolingAllocator$Chunk } from '../../../io/netty/buffer/AdaptivePoolingAllocator$Chunk.d.ts'
import type { LongAdder } from '../../../java/util/concurrent/atomic/LongAdder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class AdaptivePoolingAllocator$ChunkRegistry extends Object {
    private constructor()
    // private totalCapacity: LongAdder;
    add(arg0: AdaptivePoolingAllocator$Chunk): void;
    remove(arg0: AdaptivePoolingAllocator$Chunk): void;
    totalCapacity(): number;
}
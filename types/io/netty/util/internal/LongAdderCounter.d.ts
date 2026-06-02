import type { LongCounter } from '../../../../io/netty/util/internal/LongCounter.d.ts'
import type { LongAdder } from '../../../../java/util/concurrent/atomic/LongAdder.d.ts'
export class LongAdderCounter extends LongAdder implements LongCounter {
    constructor()
    value(): number;
}
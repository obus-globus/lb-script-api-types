import type { MpscIntQueue } from '../../../../io/netty/util/concurrent/MpscIntQueue.d.ts'
import type { AtomicIntegerArray } from '../../../../java/util/concurrent/atomic/AtomicIntegerArray.d.ts'
import type { IntBinaryOperator } from '../../../../java/util/function/IntBinaryOperator.d.ts'
import type { IntConsumer } from '../../../../java/util/function/IntConsumer.d.ts'
import type { IntSupplier } from '../../../../java/util/function/IntSupplier.d.ts'
export class MpscIntQueue$MpscAtomicIntegerArrayQueue extends AtomicIntegerArray implements MpscIntQueue {
    constructor(arg0: number, arg1: number)
    // private consumerIndex: number;
    // private emptyValue: number;
    // private mask: number;
    // private producerIndex: number;
    // private producerLimit: number;
    drain(arg0: number, arg1: (param0: number) => void): number;
    fill(arg0: number, arg1: () => number): number;
    isEmpty(): boolean;
    offer(arg0: number): boolean;
    poll(): number;
    size(): number;
    weakPeekReduce(arg0: number, arg1: number, arg2: (param0: number, param1: number) => number): number;
}
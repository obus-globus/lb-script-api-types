import type { DoubleComparator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleComparator.d.ts'
import type { DoublePriorityQueue } from '../../../../../it/unimi/dsi/fastutil/doubles/DoublePriorityQueue.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoublePriorityQueues$SynchronizedPriorityQueue extends Object implements DoublePriorityQueue {
    constructor(arg0: DoublePriorityQueue)
    constructor(arg0: DoublePriorityQueue, arg1: Object)
    // private q: DoublePriorityQueue;
    // private sync: Object;
    changed(): void;
    clear(): void;
    comparator(): (param0: number, param1: number) => number;
    dequeue(): number;
    dequeueDouble(): number;
    enqueue(arg0: number): void;
    equals(arg0: Object | null): boolean;
    first(): number;
    firstDouble(): number;
    hashCode(): number;
    isEmpty(): boolean;
    last(): number;
    lastDouble(): number;
    size(): number;
    // private writeObject(arg0: ObjectOutputStream): void;
}
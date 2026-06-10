import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { IntPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/ints/IntPriorityQueue.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntPriorityQueues$SynchronizedPriorityQueue extends Object implements IntPriorityQueue {
    constructor(arg0: IntPriorityQueue)
    constructor(arg0: IntPriorityQueue, arg1: Object)
    // private q: IntPriorityQueue;
    // private sync: Object;
    changed(): void;
    clear(): void;
    comparator(): (param0: number, param1: number) => number;
    dequeue(): number;
    dequeueInt(): number;
    enqueue(arg0: number): void;
    equals(arg0: Object | null): boolean;
    first(): number;
    firstInt(): number;
    hashCode(): number;
    isEmpty(): boolean;
    last(): number;
    lastInt(): number;
    size(): number;
    // private writeObject(arg0: ObjectOutputStream): void;
}
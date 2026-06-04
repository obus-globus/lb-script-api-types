import type { LongComparator } from '../../../../../it/unimi/dsi/fastutil/longs/LongComparator.d.ts'
import type { LongPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/longs/LongPriorityQueue.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongPriorityQueues$SynchronizedPriorityQueue extends Object implements LongPriorityQueue {
    constructor(arg0: LongPriorityQueue)
    constructor(arg0: LongPriorityQueue, arg1: Object)
    // private q: LongPriorityQueue;
    // private sync: Object;
    changed(): void;
    clear(): void;
    comparator(): (param0: number, param1: number) => kotlin.Int;
    dequeue(): number;
    dequeueLong(): number;
    enqueue(arg0: number): void;
    equals(arg0: Object | null): boolean;
    first(): number;
    firstLong(): number;
    hashCode(): number;
    isEmpty(): boolean;
    last(): number;
    lastLong(): number;
    size(): number;
    // private writeObject(arg0: ObjectOutputStream): void;
}
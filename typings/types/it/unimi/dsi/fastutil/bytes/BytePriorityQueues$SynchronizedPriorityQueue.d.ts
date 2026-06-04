import type { ByteComparator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteComparator.d.ts'
import type { BytePriorityQueue } from '../../../../../it/unimi/dsi/fastutil/bytes/BytePriorityQueue.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BytePriorityQueues$SynchronizedPriorityQueue extends Object implements BytePriorityQueue {
    constructor(arg0: BytePriorityQueue)
    constructor(arg0: BytePriorityQueue, arg1: Object)
    // private q: BytePriorityQueue;
    // private sync: Object;
    changed(): void;
    clear(): void;
    comparator(): (param0: number, param1: number) => kotlin.Int;
    dequeue(): number;
    dequeueByte(): number;
    enqueue(arg0: number): void;
    equals(arg0: Object | null): boolean;
    first(): number;
    firstByte(): number;
    hashCode(): number;
    isEmpty(): boolean;
    last(): number;
    lastByte(): number;
    size(): number;
    // private writeObject(arg0: ObjectOutputStream): void;
}
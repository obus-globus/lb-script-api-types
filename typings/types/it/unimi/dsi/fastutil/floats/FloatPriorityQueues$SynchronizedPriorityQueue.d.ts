import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { FloatPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/floats/FloatPriorityQueue.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatPriorityQueues$SynchronizedPriorityQueue extends Object implements FloatPriorityQueue {
    constructor(arg0: FloatPriorityQueue)
    constructor(arg0: FloatPriorityQueue, arg1: Object)
    // private q: FloatPriorityQueue;
    // private sync: Object;
    changed(): void;
    clear(): void;
    comparator(): (param0: number, param1: number) => kotlin.Int;
    dequeue(): number;
    dequeueFloat(): number;
    enqueue(arg0: number): void;
    equals(arg0: Object | null): boolean;
    first(): number;
    firstFloat(): number;
    hashCode(): number;
    isEmpty(): boolean;
    last(): number;
    lastFloat(): number;
    size(): number;
    // private writeObject(arg0: ObjectOutputStream): void;
}
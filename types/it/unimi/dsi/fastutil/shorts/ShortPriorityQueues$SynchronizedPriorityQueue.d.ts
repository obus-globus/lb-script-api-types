import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { ShortPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortPriorityQueue.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortPriorityQueues$SynchronizedPriorityQueue extends Object implements ShortPriorityQueue {
    constructor(arg0: ShortPriorityQueue)
    constructor(arg0: ShortPriorityQueue, arg1: Object)
    // private q: ShortPriorityQueue;
    // private sync: Object;
    changed(): void;
    clear(): void;
    comparator(): (param0: number, param1: number) => kotlin.Int;
    dequeue(): number;
    dequeue(): number;
    dequeueShort(): number;
    enqueue(arg0: number): void;
    enqueue(arg0: number): void;
    enqueue(arg0: number): void;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(): number;
    firstShort(): number;
    hashCode(): number;
    isEmpty(): boolean;
    last(): number;
    last(): number;
    lastShort(): number;
    lastShort(): number;
    size(): number;
    // private writeObject(arg0: ObjectOutputStream): void;
}
import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { CharPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/chars/CharPriorityQueue.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharPriorityQueues$SynchronizedPriorityQueue extends Object implements CharPriorityQueue {
    constructor(arg0: CharPriorityQueue)
    constructor(arg0: CharPriorityQueue, arg1: Object)
    // private q: CharPriorityQueue;
    // private sync: Object;
    changed(): void;
    clear(): void;
    comparator(): (param0: string, param1: string) => kotlin.Int;
    dequeue(): string;
    dequeueChar(): string;
    enqueue(arg0: string): void;
    equals(arg0: Object | null): boolean;
    first(): string;
    firstChar(): string;
    hashCode(): number;
    isEmpty(): boolean;
    last(): string;
    lastChar(): string;
    size(): number;
    // private writeObject(arg0: ObjectOutputStream): void;
}
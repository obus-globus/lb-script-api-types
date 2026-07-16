import type { PriorityQueue } from '../../../../it/unimi/dsi/fastutil/PriorityQueue.d.ts'
import type { ObjectOutputStream } from '../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PriorityQueues$SynchronizedPriorityQueue<K extends unknown> extends Object implements PriorityQueue<K>, Serializable {
    static serialVersionUID: number;
    constructor(arg0: PriorityQueue<K>)
    constructor(arg0: PriorityQueue<K>, arg1: Object)
    // private q: PriorityQueue<K>;
    // private sync: Object;
    changed(): void;
    clear(): void;
    comparator(): (param0: K, param1: K) => number;
    dequeue(): K;
    enqueue(arg0: K): void;
    equals(arg0: Object | null): boolean;
    first(): K;
    hashCode(): number;
    isEmpty(): boolean;
    last(): K;
    size(): number;
    toString(): string;
    // private writeObject(arg0: ObjectOutputStream): void;
}
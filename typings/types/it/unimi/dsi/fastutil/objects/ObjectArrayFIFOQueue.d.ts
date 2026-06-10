import type { PriorityQueue } from '../../../../../it/unimi/dsi/fastutil/PriorityQueue.d.ts'
import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectArrayFIFOQueue<K extends Object | number | string | boolean> extends Object implements PriorityQueue<K>, Serializable {
    static INITIAL_CAPACITY: number;
    constructor()
    constructor(arg0: number)
    // private array: K[];
    // private end: number;
    // private length: number;
    // private start: number;
    capacity(): number;
    changed(): void;
    clear(): void;
    comparator(): (param0: Object) => boolean;
    dequeue(): K;
    dequeueLast(): K;
    enqueue(arg0: K): void;
    enqueueFirst(arg0: K): void;
    // private expand(): void;
    first(): K;
    isEmpty(): boolean;
    last(): K;
    // private readObject(arg0: ObjectInputStream): void;
    // private reduce(): void;
    // private resize(arg0: number, arg1: number): void;
    size(): number;
    toArray(): K[];
    toString(): string;
    trim(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}
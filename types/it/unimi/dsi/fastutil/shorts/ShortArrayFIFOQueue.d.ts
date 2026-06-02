import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { ShortPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortPriorityQueue.d.ts'
import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortArrayFIFOQueue extends Object implements ShortPriorityQueue, Serializable {
    static INITIAL_CAPACITY: number;
    constructor()
    constructor(arg0: number)
    // private array: number[];
    // private end: number;
    // private length: number;
    // private start: number;
    capacity(): number;
    clear(): void;
    comparator(): (param0: number, param1: number) => kotlin.Int;
    dequeue(): number;
    dequeueLastShort(): number;
    dequeueShort(): number;
    enqueue(arg0: number): void;
    enqueue(arg0: number): void;
    enqueueFirst(arg0: number): void;
    // private expand(): void;
    first(): number;
    firstShort(): number;
    last(): number;
    lastShort(): number;
    lastShort(): number;
    // private readObject(arg0: ObjectInputStream): void;
    // private reduce(): void;
    // private resize(arg0: number, arg1: number): void;
    size(): number;
    toArray(): number[];
    toString(): string;
    trim(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}
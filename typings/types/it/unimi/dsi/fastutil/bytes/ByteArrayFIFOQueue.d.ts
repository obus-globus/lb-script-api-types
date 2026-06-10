import type { ByteComparator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteComparator.d.ts'
import type { BytePriorityQueue } from '../../../../../it/unimi/dsi/fastutil/bytes/BytePriorityQueue.d.ts'
import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteArrayFIFOQueue extends Object implements BytePriorityQueue, Serializable {
    static INITIAL_CAPACITY: number;
    constructor()
    constructor(arg0: number)
    // private array: number[];
    // private end: number;
    // private length: number;
    // private start: number;
    capacity(): number;
    clear(): void;
    comparator(): (param0: number, param1: number) => number;
    dequeue(): number;
    dequeueByte(): number;
    dequeueLastByte(): number;
    enqueue(arg0: number): void;
    enqueueFirst(arg0: number): void;
    // private expand(): void;
    first(): number;
    firstByte(): number;
    last(): number;
    lastByte(): number;
    // private readObject(arg0: ObjectInputStream): void;
    // private reduce(): void;
    // private resize(arg0: number, arg1: number): void;
    size(): number;
    toArray(): number[];
    toString(): string;
    trim(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}
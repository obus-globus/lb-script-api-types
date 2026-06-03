import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { CharPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/chars/CharPriorityQueue.d.ts'
import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharArrayFIFOQueue extends Object implements CharPriorityQueue, Serializable {
    static INITIAL_CAPACITY: number;
    constructor()
    constructor(arg0: number)
    // private array: string[];
    // private end: number;
    // private length: number;
    // private start: number;
    capacity(): number;
    clear(): void;
    comparator(): (param0: string, param1: string) => kotlin.Int;
    dequeue(): string;
    dequeueChar(): string;
    dequeueLastChar(): string;
    enqueue(arg0: string): void;
    enqueue(arg0: string): void;
    enqueue(arg0: string): void;
    enqueueFirst(arg0: string): void;
    // private expand(): void;
    first(): string;
    firstChar(): string;
    last(): string;
    lastChar(): string;
    lastChar(): string;
    // private readObject(arg0: ObjectInputStream): void;
    // private reduce(): void;
    // private resize(arg0: number, arg1: number): void;
    size(): number;
    toArray(): string[];
    toString(): string;
    trim(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}
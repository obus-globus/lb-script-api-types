import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { IntPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/ints/IntPriorityQueue.d.ts'
import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntArrayPriorityQueue extends Object implements IntPriorityQueue, Serializable {
    constructor()
    constructor(arg0: (param0: number, param1: number) => kotlin.Int)
    constructor(arg0: number)
    constructor(arg0: number, arg1: (param0: number, param1: number) => kotlin.Int)
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: (param0: number, param1: number) => kotlin.Int)
    constructor(arg0: number[], arg1: number)
    constructor(arg0: number[], arg1: number, arg2: (param0: number, param1: number) => kotlin.Int)
    // private array: number[];
    // private c: (param0: number, param1: number) => kotlin.Int;
    // private firstIndex: number;
    // private firstIndexValid: boolean;
    // private size: number;
    changed(): void;
    clear(): void;
    comparator(): (param0: number, param1: number) => kotlin.Int;
    dequeue(): number;
    dequeueInt(): number;
    enqueue(arg0: number): void;
    enqueue(arg0: number): void;
    enqueue(arg0: number): void;
    // private ensureNonEmpty(): void;
    // private findFirst(): number;
    first(): number;
    firstInt(): number;
    last(): number;
    lastInt(): number;
    // private readObject(arg0: ObjectInputStream): void;
    size(): number;
    trim(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}
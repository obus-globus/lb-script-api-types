import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { FloatPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/floats/FloatPriorityQueue.d.ts'
import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatArrayPriorityQueue extends Object implements FloatPriorityQueue, Serializable {
    constructor()
    constructor(arg0: (param0: number, param1: number) => number)
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: (param0: number, param1: number) => number)
    constructor(arg0: number[], arg1: number)
    constructor(arg0: number[], arg1: number, arg2: (param0: number, param1: number) => number)
    constructor(arg0: number)
    constructor(arg0: number, arg1: (param0: number, param1: number) => number)
    // private array: number[];
    // private c: (param0: number, param1: number) => number;
    // private firstIndex: number;
    // private firstIndexValid: boolean;
    // private size: number;
    changed(): void;
    clear(): void;
    comparator(): (param0: number, param1: number) => number;
    dequeue(): number;
    dequeueFloat(): number;
    enqueue(arg0: number): void;
    // private ensureNonEmpty(): void;
    // private findFirst(): number;
    first(): number;
    firstFloat(): number;
    last(): number;
    lastFloat(): number;
    // private readObject(arg0: ObjectInputStream): void;
    size(): number;
    trim(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}
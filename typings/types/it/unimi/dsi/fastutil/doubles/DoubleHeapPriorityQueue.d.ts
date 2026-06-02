import type { DoubleComparator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleComparator.d.ts'
import type { DoublePriorityQueue } from '../../../../../it/unimi/dsi/fastutil/doubles/DoublePriorityQueue.d.ts'
import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleHeapPriorityQueue extends Object implements DoublePriorityQueue, Serializable {
    constructor(arg0: E[])
    constructor(arg0: E[], arg1: (param0: number, param1: number) => kotlin.Int)
    constructor()
    constructor(arg0: (Object | null)[])
    constructor(arg0: (Object | null)[], arg1: (param0: number, param1: number) => kotlin.Int)
    constructor(arg0: (param0: number, param1: number) => kotlin.Int)
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: (param0: number, param1: number) => kotlin.Int)
    constructor(arg0: number[], arg1: number)
    constructor(arg0: number[], arg1: number, arg2: (param0: number, param1: number) => kotlin.Int)
    constructor(arg0: number)
    constructor(arg0: number, arg1: (param0: number, param1: number) => kotlin.Int)
    // private c: (param0: number, param1: number) => kotlin.Int;
    // private heap: number[];
    // private size: number;
    changed(): void;
    clear(): void;
    comparator(): (param0: number, param1: number) => kotlin.Int;
    dequeue(): number;
    dequeueDouble(): number;
    enqueue(arg0: number): void;
    enqueue(arg0: number): void;
    first(): number;
    firstDouble(): number;
    last(): number;
    lastDouble(): number;
    // private readObject(arg0: ObjectInputStream): void;
    size(): number;
    trim(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}
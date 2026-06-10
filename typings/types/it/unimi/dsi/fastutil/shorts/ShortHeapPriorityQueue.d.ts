import type { ShortComparator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortComparator.d.ts'
import type { ShortPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortPriorityQueue.d.ts'
import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortHeapPriorityQueue extends Object implements ShortPriorityQueue, Serializable {
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: (param0: number, param1: number) => number)
    constructor()
    constructor(arg0: (Object | null)[])
    constructor(arg0: (Object | null)[], arg1: (param0: number, param1: number) => number)
    constructor(arg0: (param0: number, param1: number) => number)
    constructor(arg0: number)
    constructor(arg0: number, arg1: (param0: number, param1: number) => number)
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: (param0: number, param1: number) => number)
    constructor(arg0: number[], arg1: number)
    constructor(arg0: number[], arg1: number, arg2: (param0: number, param1: number) => number)
    // private c: (param0: number, param1: number) => number;
    // private heap: number[];
    // private size: number;
    changed(): void;
    clear(): void;
    comparator(): (param0: number, param1: number) => number;
    dequeue(): number;
    dequeueShort(): number;
    enqueue(arg0: number): void;
    first(): number;
    firstShort(): number;
    last(): number;
    lastShort(): number;
    // private readObject(arg0: ObjectInputStream): void;
    size(): number;
    trim(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}
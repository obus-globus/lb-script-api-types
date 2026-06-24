import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { CharPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/chars/CharPriorityQueue.d.ts'
import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharHeapPriorityQueue extends Object implements CharPriorityQueue, Serializable {
    constructor()
    constructor(arg0: (Object | null)[])
    constructor(arg0: (Object | null)[], arg1: (param0: string, param1: string) => number)
    constructor(arg0: (param0: string, param1: string) => number)
    constructor(arg0: string[])
    constructor(arg0: string[], arg1: (param0: string, param1: string) => number)
    constructor(arg0: string[], arg1: number)
    constructor(arg0: string[], arg1: number, arg2: (param0: string, param1: string) => number)
    constructor(arg0: number)
    constructor(arg0: number, arg1: (param0: string, param1: string) => number)
    constructor(arg0: string[])
    constructor(arg0: string[], arg1: (param0: string, param1: string) => number)
    // private c: (param0: string, param1: string) => number;
    // private heap: string[];
    // private size: number;
    changed(): void;
    clear(): void;
    comparator(): (param0: string, param1: string) => number;
    dequeue(): string;
    dequeueChar(): string;
    enqueue(arg0: string): void;
    first(): string;
    firstChar(): string;
    last(): string;
    lastChar(): string;
    // private readObject(arg0: ObjectInputStream): void;
    size(): number;
    trim(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}
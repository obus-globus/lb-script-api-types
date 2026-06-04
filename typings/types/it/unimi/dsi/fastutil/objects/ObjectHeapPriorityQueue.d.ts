import type { PriorityQueue } from '../../../../../it/unimi/dsi/fastutil/PriorityQueue.d.ts'
import type { ObjectInputStream } from '../../../../../java/io/ObjectInputStream.d.ts'
import type { ObjectOutputStream } from '../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectHeapPriorityQueue<K extends Object | number | string | boolean> extends Object implements PriorityQueue<K>, Serializable {
    constructor(arg0: E[])
    constructor(arg0: E[], arg1: (param0: K) => kotlin.Boolean)
    constructor()
    constructor(arg0: (param0: K) => kotlin.Boolean)
    constructor(arg0: K[])
    constructor(arg0: K[], arg1: (param0: K) => kotlin.Boolean)
    constructor(arg0: K[], arg1: number)
    constructor(arg0: K[], arg1: number, arg2: (param0: K) => kotlin.Boolean)
    constructor(arg0: number)
    constructor(arg0: number, arg1: (param0: K) => kotlin.Boolean)
    // private c: (param0: K) => kotlin.Boolean;
    // private heap: K[];
    // private size: number;
    changed(): void;
    clear(): void;
    comparator(): (param0: K) => kotlin.Boolean;
    dequeue(): K;
    enqueue(arg0: K): void;
    first(): K;
    isEmpty(): boolean;
    last(): K;
    // private readObject(arg0: ObjectInputStream): void;
    size(): number;
    trim(): void;
    // private writeObject(arg0: ObjectOutputStream): void;
}
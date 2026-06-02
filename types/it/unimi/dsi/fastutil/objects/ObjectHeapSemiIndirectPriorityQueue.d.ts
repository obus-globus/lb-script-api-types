import type { IndirectPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/IndirectPriorityQueue.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectHeapSemiIndirectPriorityQueue<K extends Object | number | string | boolean> extends Object implements IndirectPriorityQueue<K> {
    constructor(arg0: K[])
    constructor(arg0: K[], arg1: (param0: K) => kotlin.Boolean)
    constructor(arg0: K[], arg1: number)
    constructor(arg0: K[], arg1: number, arg2: (param0: K) => kotlin.Boolean)
    constructor(arg0: K[], arg1: number[])
    constructor(arg0: K[], arg1: number[], arg2: (param0: K) => kotlin.Boolean)
    constructor(arg0: K[], arg1: number[], arg2: number)
    constructor(arg0: K[], arg1: number[], arg2: number, arg3: (param0: K) => kotlin.Boolean)
    // private c: (param0: K) => kotlin.Boolean;
    // private heap: number[];
    // private refArray: K[];
    // private size: number;
    allChanged(): void;
    allChanged(): void;
    changed(): void;
    changed(arg0: number): void;
    changed(): void;
    clear(): void;
    comparator(): (param0: K) => kotlin.Boolean;
    contains(arg0: number): boolean;
    dequeue(): number;
    enqueue(arg0: number): void;
    ensureElement(arg0: number): void;
    first(): number;
    front(arg0: number[]): number;
    front(arg0: number[]): number;
    isEmpty(): boolean;
    last(): number;
    remove(arg0: number): boolean;
    size(): number;
    toString(): string;
    trim(): void;
}
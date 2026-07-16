import type { IndirectPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/IndirectPriorityQueue.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectHeapSemiIndirectPriorityQueue<K extends unknown> extends Object implements IndirectPriorityQueue<K> {
    constructor(arg0: K[])
    constructor(arg0: K[], arg1: (param0: K, param1: K) => number)
    constructor(arg0: K[], arg1: number)
    constructor(arg0: K[], arg1: number, arg2: (param0: K, param1: K) => number)
    constructor(arg0: K[], arg1: number[])
    constructor(arg0: K[], arg1: number[], arg2: (param0: K, param1: K) => number)
    constructor(arg0: K[], arg1: number[], arg2: number)
    constructor(arg0: K[], arg1: number[], arg2: number, arg3: (param0: K, param1: K) => number)
    // private c: (param0: K, param1: K) => number;
    // private heap: number[];
    // private refArray: K[];
    // private size: number;
    allChanged(): void;
    changed(): void;
    changed(arg0: number): void;
    clear(): void;
    comparator(): (param0: K, param1: K) => number;
    contains(arg0: number): boolean;
    dequeue(): number;
    enqueue(arg0: number): void;
    ensureElement(arg0: number): void;
    first(): number;
    front(arg0: number[]): number;
    isEmpty(): boolean;
    last(): number;
    remove(arg0: number): boolean;
    size(): number;
    toString(): string;
    trim(): void;
}
import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { IntIndirectPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/ints/IntIndirectPriorityQueue.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntHeapSemiIndirectPriorityQueue extends Object implements IntIndirectPriorityQueue {
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: (param0: number, param1: number) => kotlin.Int)
    constructor(arg0: number[], arg1: number)
    constructor(arg0: number[], arg1: number, arg2: (param0: number, param1: number) => kotlin.Int)
    constructor(arg0: number[], arg1: number[])
    constructor(arg0: number[], arg1: number[], arg2: (param0: number, param1: number) => kotlin.Int)
    constructor(arg0: number[], arg1: number[], arg2: number)
    constructor(arg0: number[], arg1: number[], arg2: number, arg3: (param0: number, param1: number) => kotlin.Int)
    // private c: (param0: number, param1: number) => kotlin.Int;
    // private heap: number[];
    // private refArray: number[];
    // private size: number;
    allChanged(): void;
    changed(): void;
    changed(arg0: number): void;
    clear(): void;
    comparator(): (param0: number, param1: number) => kotlin.Int;
    dequeue(): number;
    enqueue(arg0: number): void;
    ensureElement(arg0: number): void;
    first(): number;
    front(arg0: number[]): number;
    size(): number;
    toString(): string;
    trim(): void;
}
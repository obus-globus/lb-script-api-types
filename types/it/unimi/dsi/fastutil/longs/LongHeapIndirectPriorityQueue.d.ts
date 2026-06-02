import type { LongComparator } from '../../../../../it/unimi/dsi/fastutil/longs/LongComparator.d.ts'
import type { LongHeapSemiIndirectPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/longs/LongHeapSemiIndirectPriorityQueue.d.ts'
export class LongHeapIndirectPriorityQueue extends LongHeapSemiIndirectPriorityQueue {
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: (param0: number, param1: number) => kotlin.Int)
    constructor(arg0: number[], arg1: number)
    constructor(arg0: number[], arg1: number, arg2: (param0: number, param1: number) => kotlin.Int)
    constructor(arg0: number[], arg1: number[])
    constructor(arg0: number[], arg1: number[], arg2: (param0: number, param1: number) => kotlin.Int)
    constructor(arg0: number[], arg1: number[], arg2: number)
    constructor(arg0: number[], arg1: number[], arg2: number, arg3: (param0: number, param1: number) => kotlin.Int)
    // private inv: number[];
    allChanged(): void;
    changed(): void;
    changed(arg0: number): void;
    clear(): void;
    contains(arg0: number): boolean;
    dequeue(): number;
    enqueue(arg0: number): void;
    remove(arg0: number): boolean;
}
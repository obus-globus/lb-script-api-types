import type { DoubleComparator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleComparator.d.ts'
import type { DoubleHeapSemiIndirectPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleHeapSemiIndirectPriorityQueue.d.ts'
export class DoubleHeapIndirectPriorityQueue extends DoubleHeapSemiIndirectPriorityQueue {
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
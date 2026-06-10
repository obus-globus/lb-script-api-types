import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { FloatHeapSemiIndirectPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/floats/FloatHeapSemiIndirectPriorityQueue.d.ts'
export class FloatHeapIndirectPriorityQueue extends FloatHeapSemiIndirectPriorityQueue {
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: (param0: number, param1: number) => number)
    constructor(arg0: number[], arg1: number)
    constructor(arg0: number[], arg1: number, arg2: (param0: number, param1: number) => number)
    constructor(arg0: number[], arg1: number[])
    constructor(arg0: number[], arg1: number[], arg2: (param0: number, param1: number) => number)
    constructor(arg0: number[], arg1: number[], arg2: number)
    constructor(arg0: number[], arg1: number[], arg2: number, arg3: (param0: number, param1: number) => number)
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
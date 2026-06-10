import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { CharHeapSemiIndirectPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/chars/CharHeapSemiIndirectPriorityQueue.d.ts'
export class CharHeapIndirectPriorityQueue extends CharHeapSemiIndirectPriorityQueue {
    constructor(arg0: string[])
    constructor(arg0: string[], arg1: (param0: string, param1: string) => number)
    constructor(arg0: string[], arg1: number)
    constructor(arg0: string[], arg1: number, arg2: (param0: string, param1: string) => number)
    constructor(arg0: string[], arg1: number[])
    constructor(arg0: string[], arg1: number[], arg2: (param0: string, param1: string) => number)
    constructor(arg0: string[], arg1: number[], arg2: number)
    constructor(arg0: string[], arg1: number[], arg2: number, arg3: (param0: string, param1: string) => number)
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
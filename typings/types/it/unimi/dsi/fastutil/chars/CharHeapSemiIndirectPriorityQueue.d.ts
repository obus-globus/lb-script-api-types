import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { CharIndirectPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/chars/CharIndirectPriorityQueue.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharHeapSemiIndirectPriorityQueue extends Object implements CharIndirectPriorityQueue {
    constructor(arg0: string[])
    constructor(arg0: string[], arg1: (param0: string, param1: string) => kotlin.Int)
    constructor(arg0: string[], arg1: number)
    constructor(arg0: string[], arg1: number, arg2: (param0: string, param1: string) => kotlin.Int)
    constructor(arg0: string[], arg1: number[])
    constructor(arg0: string[], arg1: number[], arg2: (param0: string, param1: string) => kotlin.Int)
    constructor(arg0: string[], arg1: number[], arg2: number)
    constructor(arg0: string[], arg1: number[], arg2: number, arg3: (param0: string, param1: string) => kotlin.Int)
    // private c: (param0: string, param1: string) => kotlin.Int;
    // private heap: number[];
    // private refArray: string[];
    // private size: number;
    allChanged(): void;
    changed(): void;
    clear(): void;
    comparator(): (param0: string, param1: string) => kotlin.Int;
    dequeue(): number;
    enqueue(arg0: number): void;
    ensureElement(arg0: number): void;
    first(): number;
    front(arg0: number[]): number;
    size(): number;
    toString(): string;
    trim(): void;
}
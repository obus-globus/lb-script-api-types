import type { LongComparator } from '../../../../../it/unimi/dsi/fastutil/longs/LongComparator.d.ts'
import type { LongIndirectPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/longs/LongIndirectPriorityQueue.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongArrayIndirectPriorityQueue extends Object implements LongIndirectPriorityQueue {
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: (param0: number, param1: number) => kotlin.Int)
    constructor(arg0: number[], arg1: number)
    constructor(arg0: number[], arg1: number, arg2: (param0: number, param1: number) => kotlin.Int)
    constructor(arg0: number[], arg1: number[])
    constructor(arg0: number[], arg1: number[], arg2: (param0: number, param1: number) => kotlin.Int)
    constructor(arg0: number[], arg1: number[], arg2: number)
    constructor(arg0: number[], arg1: number[], arg2: number, arg3: (param0: number, param1: number) => kotlin.Int)
    // private array: number[];
    // private c: (param0: number, param1: number) => kotlin.Int;
    // private firstIndex: number;
    // private firstIndexValid: boolean;
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
    ensureNonEmpty(): void;
    // private findFirst(): number;
    // private findLast(): number;
    first(): number;
    front(arg0: number[]): number;
    last(): number;
    remove(arg0: number): boolean;
    size(): number;
    toString(): string;
    trim(): void;
}
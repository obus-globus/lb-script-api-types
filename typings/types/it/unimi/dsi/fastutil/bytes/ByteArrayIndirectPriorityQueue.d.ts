import type { ByteComparator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteComparator.d.ts'
import type { ByteIndirectPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteIndirectPriorityQueue.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteArrayIndirectPriorityQueue extends Object implements ByteIndirectPriorityQueue {
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: (param0: number, param1: number) => number)
    constructor(arg0: number[], arg1: number)
    constructor(arg0: number[], arg1: number, arg2: (param0: number, param1: number) => number)
    constructor(arg0: number[], arg1: number[])
    constructor(arg0: number[], arg1: number[], arg2: (param0: number, param1: number) => number)
    constructor(arg0: number[], arg1: number[], arg2: number)
    constructor(arg0: number[], arg1: number[], arg2: number, arg3: (param0: number, param1: number) => number)
    // private array: number[];
    // private c: (param0: number, param1: number) => number;
    // private firstIndex: number;
    // private firstIndexValid: boolean;
    // private refArray: number[];
    // private size: number;
    allChanged(): void;
    changed(): void;
    changed(arg0: number): void;
    clear(): void;
    comparator(): (param0: number, param1: number) => number;
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
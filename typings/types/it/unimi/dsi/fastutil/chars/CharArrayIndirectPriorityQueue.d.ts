import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { CharIndirectPriorityQueue } from '../../../../../it/unimi/dsi/fastutil/chars/CharIndirectPriorityQueue.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharArrayIndirectPriorityQueue extends Object implements CharIndirectPriorityQueue {
    constructor(arg0: string[])
    constructor(arg0: string[], arg1: (param0: string, param1: string) => number)
    constructor(arg0: string[], arg1: number)
    constructor(arg0: string[], arg1: number, arg2: (param0: string, param1: string) => number)
    constructor(arg0: string[], arg1: number[])
    constructor(arg0: string[], arg1: number[], arg2: (param0: string, param1: string) => number)
    constructor(arg0: string[], arg1: number[], arg2: number)
    constructor(arg0: string[], arg1: number[], arg2: number, arg3: (param0: string, param1: string) => number)
    // private array: number[];
    // private c: (param0: string, param1: string) => number;
    // private firstIndex: number;
    // private firstIndexValid: boolean;
    // private refArray: string[];
    // private size: number;
    allChanged(): void;
    changed(): void;
    changed(arg0: number): void;
    clear(): void;
    comparator(): (param0: string, param1: string) => number;
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
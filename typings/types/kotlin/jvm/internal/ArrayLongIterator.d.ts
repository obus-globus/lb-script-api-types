import type { LongIterator } from '../../../kotlin/collections/LongIterator.d.ts'
export class ArrayLongIterator extends LongIterator {
    constructor(array: number[])
    // private array: number[];
    // private index: number;
    hasNext(): boolean;
    nextLong(): number;
}
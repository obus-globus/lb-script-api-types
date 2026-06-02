import type { IntIterator } from '../../../kotlin/collections/IntIterator.d.ts'
export class ArrayIntIterator extends IntIterator {
    constructor(array: number[])
    // private array: number[];
    // private index: number;
    hasNext(): boolean;
    nextInt(): number;
}
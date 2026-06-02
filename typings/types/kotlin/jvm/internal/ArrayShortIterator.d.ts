import type { ShortIterator } from '../../../kotlin/collections/ShortIterator.d.ts'
export class ArrayShortIterator extends ShortIterator {
    constructor(array: number[])
    // private array: number[];
    // private index: number;
    hasNext(): boolean;
    nextShort(): number;
}
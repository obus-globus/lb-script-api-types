import type { FloatIterator } from '../../../kotlin/collections/FloatIterator.d.ts'
export class ArrayFloatIterator extends FloatIterator {
    constructor(array: number[])
    // private array: number[];
    // private index: number;
    hasNext(): boolean;
    nextFloat(): number;
}
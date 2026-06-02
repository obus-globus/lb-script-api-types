import type { DoubleIterator } from '../../../kotlin/collections/DoubleIterator.d.ts'
export class ArrayDoubleIterator extends DoubleIterator {
    constructor(array: number[])
    // private array: number[];
    // private index: number;
    hasNext(): boolean;
    nextDouble(): number;
}
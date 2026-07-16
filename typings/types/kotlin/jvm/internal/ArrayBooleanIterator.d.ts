import type { BooleanIterator } from '../../../kotlin/collections/BooleanIterator.d.ts'
export class ArrayBooleanIterator extends BooleanIterator {
    constructor(array: boolean[])
    // private array: boolean[];
    // private index: number;
    hasNext(): boolean;
    nextBoolean(): boolean;
}
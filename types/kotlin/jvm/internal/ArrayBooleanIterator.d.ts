import type { Object } from '../../../java/lang/Object.d.ts'
import type { BooleanIterator } from '../../../kotlin/collections/BooleanIterator.d.ts'
export class ArrayBooleanIterator extends BooleanIterator {
    constructor(array: (Object | null)[])
    // private array: (Object | null)[];
    // private index: number;
    hasNext(): boolean;
    nextBoolean(): boolean;
}
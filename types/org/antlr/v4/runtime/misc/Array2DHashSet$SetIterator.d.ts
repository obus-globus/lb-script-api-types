import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class Array2DHashSet$SetIterator extends Object implements Iterator<T> {
    constructor(null_: Array2DHashSet$SetIterator)
    // private data: T[];
    // private nextIndex: number;
    // private removed: boolean;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next<T extends Object | number | string | boolean>(): T;
    remove(): void;
}
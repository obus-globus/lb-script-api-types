import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class Array2DHashSet$SetIterator extends Object implements Iterator<T> {
    constructor(null_: T[], arg1: T[])
    // private data: T[];
    // private nextIndex: number;
    // private removed: boolean;
    forEachRemaining<T extends unknown>(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next<T extends unknown>(): T;
    remove(): void;
}
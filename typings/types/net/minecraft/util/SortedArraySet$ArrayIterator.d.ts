import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export class SortedArraySet$ArrayIterator extends Object implements Iterator<T> {
    private constructor(null_: SortedArraySet$ArrayIterator)
    // private index: number;
    // private last: number;
    forEachRemaining<T extends Object | number | string | boolean>(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next<T extends Object | number | string | boolean>(): T;
    remove(): void;
}
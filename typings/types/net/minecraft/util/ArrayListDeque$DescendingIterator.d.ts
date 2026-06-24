import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export class ArrayListDeque$DescendingIterator extends Object implements Iterator<T> {
    constructor(null_: T[])
    // private index: number;
    forEachRemaining<T extends unknown>(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next<T extends unknown>(): T;
    remove(): void;
}
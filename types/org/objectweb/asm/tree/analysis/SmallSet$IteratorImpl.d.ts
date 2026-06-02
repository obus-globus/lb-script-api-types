import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class SmallSet$IteratorImpl<T extends Object | number | string | boolean> extends Object implements Iterator<T> {
    constructor(arg0: T, arg1: T)
    // private firstElement: T;
    // private secondElement: T;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): T;
    remove(): void;
}
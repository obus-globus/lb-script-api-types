import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export abstract class TransformedIterator<F extends Object | number | string | boolean, T extends Object | number | string | boolean> extends Object implements Iterator<T> {
    constructor(backingIterator: Iterator<F>)
    // private backingIterator: Iterator<F>;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): T;
    remove(): void;
    transform(from: F): T;
}
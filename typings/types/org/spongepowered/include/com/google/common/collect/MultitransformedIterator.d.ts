import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
export abstract class MultitransformedIterator<F extends unknown, T extends unknown> extends Object implements Iterator<T> {
    constructor(arg0: Iterator<F>)
    // private backingIterator: Iterator<F>;
    // private current: Iterator<T>;
    // private removeFrom: Iterator<T>;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): T;
    remove(): void;
    transform(arg0: F): Iterator<T>;
}
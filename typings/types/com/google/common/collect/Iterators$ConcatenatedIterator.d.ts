import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Iterators$ConcatenatedIterator<T extends unknown> extends Object implements Iterator<T> {
    constructor(metaIterator: Iterator<Iterator<T>>)
    // private iterator: Iterator<T>;
    // private metaIterators: Iterator<Iterator<T>>[];
    // private toRemove: Iterator<T>;
    // private topMetaIterator: Iterator<Iterator<T>>;
    forEachRemaining(arg0: (param0: T) => void): void;
    // private getTopMetaIterator(): Iterator<Iterator<T>>;
    hasNext(): boolean;
    next(): T;
    remove(): void;
}
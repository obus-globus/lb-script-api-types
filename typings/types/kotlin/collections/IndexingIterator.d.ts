import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { IndexedValue } from '../../kotlin/collections/IndexedValue.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export class IndexingIterator<T extends unknown> extends Object implements Iterator<IndexedValue<T>> {
    constructor(iterator: Iterator<T>)
    // private index: number;
    // private iterator: Iterator<T>;
    forEachRemaining(arg0: (param0: IndexedValue<T>) => void): void;
    hasNext(): boolean;
    next(): IndexedValue<T>;
}
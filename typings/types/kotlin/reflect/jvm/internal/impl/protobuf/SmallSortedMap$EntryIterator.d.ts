import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class SmallSortedMap$EntryIterator extends Object implements Iterator<Map$Entry<K, V>> {
    private constructor(null_: SmallSortedMap$EntryIterator)
    // private lazyOverflowIterator: Iterator<Map$Entry<K, V>>;
    // private nextCalledBeforeRemove: boolean;
    // private pos: number;
    forEachRemaining(arg0: (param0: T) => void): void;
    // private getOverflowIterator(): Iterator<Map$Entry<K, V>>;
    hasNext(): boolean;
    next(): Map$Entry<K, V>;
    remove(): void;
}
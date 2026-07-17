import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class SmallSortedMap$EntryIterator extends Object implements Iterator<Map$Entry<K, V>> {
    private constructor(null_: JavaMap<Comparable<K>, Object>)
    // private lazyOverflowIterator: Iterator<Map$Entry<K, V>>;
    // private nextCalledBeforeRemove: boolean;
    // private pos: number;
    forEachRemaining<K extends Comparable<K>, V extends unknown>(arg0: (param0: Map$Entry<K, V>) => void): void;
    // private getOverflowIterator<K extends Comparable<K>, V extends unknown>(): Iterator<Map$Entry<K, V>>;
    hasNext(): boolean;
    next<K extends Comparable<K>, V extends unknown>(): Map$Entry<K, V>;
    remove(): void;
}
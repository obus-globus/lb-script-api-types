import type { AbstractMapBasedMultimap } from '../../../../com/google/common/collect/AbstractMapBasedMultimap.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export abstract class AbstractMapBasedMultimap$Itr<T extends unknown> extends Object implements Iterator<T> {
    constructor(null_: AbstractMapBasedMultimap<Object, Object>)
    // private collection: V[];
    // private key: K;
    // private keyIterator: Iterator<Map$Entry<K, V[]>>;
    // private valueIterator: Iterator<V>;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): T;
    output<K extends unknown, V extends unknown>(key: K, value: V): T;
    remove(): void;
}
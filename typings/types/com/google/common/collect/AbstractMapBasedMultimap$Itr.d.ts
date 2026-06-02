import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export abstract class AbstractMapBasedMultimap$Itr<T extends Object | number | string | boolean> extends Object implements Iterator<T> {
    constructor(null_: AbstractMapBasedMultimap$Itr<Object>)
    // private collection: E[];
    // private key: K;
    // private keyIterator: Iterator<Map$Entry<K, E[]>>;
    // private valueIterator: Iterator<V>;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): T;
    output<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(key: K, value: V): T;
    remove(): void;
}
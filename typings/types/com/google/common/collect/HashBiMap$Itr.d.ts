import type { HashBiMap$BiEntry } from '../../../../com/google/common/collect/HashBiMap$BiEntry.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export abstract class HashBiMap$Itr<T extends Object | number | string | boolean> extends Object implements Iterator<T> {
    private constructor(null_: HashBiMap$Itr<Object>)
    // private expectedModCount: number;
    // private next: HashBiMap$BiEntry<K, V>;
    // private remaining: number;
    // private toRemove: HashBiMap$BiEntry<K, V>;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): T;
    output<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(entry: HashBiMap$BiEntry<K, V>): T;
    remove(): void;
}
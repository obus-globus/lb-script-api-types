import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { HashBiMap$BiEntry } from '../../../../../../../org/spongepowered/include/com/google/common/collect/HashBiMap$BiEntry.d.ts'
export abstract class HashBiMap$Itr<T extends unknown> extends Object implements Iterator<T> {
    constructor(null_: HashBiMap$Itr<Object>)
    // private expectedModCount: number;
    // private next: HashBiMap$BiEntry<K, V>;
    // private toRemove: HashBiMap$BiEntry<K, V>;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): T;
    output<K extends unknown, V extends unknown>(arg0: HashBiMap$BiEntry<K, V>): T;
    remove(): void;
}
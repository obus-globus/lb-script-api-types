import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { HashBiMap$Node } from '../../../../com/google/common/collect/HashBiMap$Node.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export abstract class HashBiMap$BiIterator<K extends unknown, V extends unknown, T extends unknown> extends Object implements Iterator<T> {
    constructor(biMap: JavaMap<K, V>)
    // private biMap: JavaMap<K, V>;
    // private expectedModCount: number;
    // private next: HashBiMap$Node<K, V>;
    // private remaining: number;
    // private toRemove: HashBiMap$Node<K, V>;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): T;
    output(node: HashBiMap$Node<K, V>): T;
    remove(): void;
}
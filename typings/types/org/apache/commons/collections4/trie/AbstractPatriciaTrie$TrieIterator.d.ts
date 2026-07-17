import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { AbstractPatriciaTrie$TrieEntry } from '../../../../../org/apache/commons/collections4/trie/AbstractPatriciaTrie$TrieEntry.d.ts'
export abstract class AbstractPatriciaTrie$TrieIterator<E extends unknown> extends Object implements Iterator<E> {
    constructor(null_: JavaMap<Object, Object>)
    constructor(null_: JavaMap<Object, Object>, arg1: AbstractPatriciaTrie$TrieEntry<Object, Object>)
    // private current: AbstractPatriciaTrie$TrieEntry<K, V>;
    // private expectedModCount: number;
    // private next: AbstractPatriciaTrie$TrieEntry<K, V>;
    findNext<K extends unknown, V extends unknown>(arg0: AbstractPatriciaTrie$TrieEntry<K, V>): AbstractPatriciaTrie$TrieEntry<K, V>;
    forEachRemaining(arg0: (param0: E) => void): void;
    hasNext(): boolean;
    nextEntry<K extends unknown, V extends unknown>(): AbstractPatriciaTrie$TrieEntry<K, V>;
    remove(): void;
}
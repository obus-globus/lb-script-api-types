import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { OrderedMapIterator } from '../../../../../org/apache/commons/collections4/OrderedMapIterator.d.ts'
import type { AbstractPatriciaTrie$TrieEntry } from '../../../../../org/apache/commons/collections4/trie/AbstractPatriciaTrie$TrieEntry.d.ts'
import type { AbstractPatriciaTrie$TrieIterator } from '../../../../../org/apache/commons/collections4/trie/AbstractPatriciaTrie$TrieIterator.d.ts'
export class AbstractPatriciaTrie$TrieMapIterator extends AbstractPatriciaTrie$TrieIterator<Object> implements OrderedMapIterator<K, V> {
    private constructor(null_: AbstractPatriciaTrie$TrieMapIterator)
    // private previous: AbstractPatriciaTrie$TrieEntry<K, V>;
    getKey<K extends Object | number | string | boolean>(): K;
    getValue<V extends Object | number | string | boolean>(): V;
    hasPrevious(): boolean;
    next<K extends Object | number | string | boolean>(): K;
    nextEntry(): AbstractPatriciaTrie$TrieEntry<K, V>;
    previous<K extends Object | number | string | boolean>(): K;
    previousEntry(): AbstractPatriciaTrie$TrieEntry<K, V>;
    setValue<V extends Object | number | string | boolean>(arg0: V): V;
}
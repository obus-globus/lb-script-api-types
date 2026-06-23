import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractBitwiseTrie$BasicEntry } from '../../../../../org/apache/commons/collections4/trie/AbstractBitwiseTrie$BasicEntry.d.ts'
export class AbstractPatriciaTrie$TrieEntry<K extends unknown, V extends unknown> extends AbstractBitwiseTrie$BasicEntry<K, V> {
    constructor(arg0: K, arg1: V, arg2: number)
    // private bitIndex: number;
    // private left: AbstractPatriciaTrie$TrieEntry<K, V>;
    // private parent: AbstractPatriciaTrie$TrieEntry<K, V>;
    // private predecessor: AbstractPatriciaTrie$TrieEntry<K, V>;
    // private right: AbstractPatriciaTrie$TrieEntry<K, V>;
    isEmpty(): boolean;
    isExternalNode(): boolean;
    isInternalNode(): boolean;
    toString(): string;
}
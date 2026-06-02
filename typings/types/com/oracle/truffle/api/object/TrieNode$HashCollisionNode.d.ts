import type { TrieNode } from '../../../../../com/oracle/truffle/api/object/TrieNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class TrieNode$HashCollisionNode<K extends Object | number | string | boolean, V extends Object | number | string | boolean, E extends Map$Entry<K, V>> extends TrieNode<K, V, E> {
    constructor(hash: number, entries: Object[])
    // private entries: Object[];
    // private hashcode: number;
    entries(): Object[];
    find(key: K, hash: number, shift: number): E;
    // private findIndex(key: K): number;
    put(key: K, hash: number, entry: E, shift: number): TrieNode<K, V, E>;
    remove(key: K, hash: number, shift: number): TrieNode<K, V, E>;
}
import type { TrieNode } from '../../../../../com/oracle/truffle/api/object/TrieNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class TrieNode$BitmapNode<K extends Object | number | string | boolean, V extends Object | number | string | boolean, E extends Map$Entry<K, V>> extends TrieNode<K, V, E> {
    constructor()
    constructor(bitmap: number, entries: Object[])
    // private bitmap: number;
    // private entries: Object[];
    // private collapseSingletonNode(node: TrieNode<K, V, E>): Object;
    entries(): Object[];
    find(key: K, hash: number): E;
    find(key: K, hash: number, shift: number): E;
    // private index(bit: number): number;
    put(key: K, hash: number, entry: E): TrieNode<K, V, E>;
    put(key: K, hash: number, entry: E, shift: number): TrieNode<K, V, E>;
    remove(key: K, hash: number): TrieNode<K, V, E>;
    remove(key: K, hash: number, shift: number): TrieNode<K, V, E>;
    // private removeBitAndIndex(bit: number, index: number): TrieNode<K, V, E>;
}
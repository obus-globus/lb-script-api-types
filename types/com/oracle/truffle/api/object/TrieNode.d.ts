import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export abstract class TrieNode<K extends Object | number | string | boolean, V extends Object | number | string | boolean, E extends Map$Entry<K, V>> extends Object {
    constructor()
    combine(key1: K, hash1: number, entry1: E, key2: K, hash2: number, entry2: E, shift: number): TrieNode<K, V, E>;
    count(): number;
    entries(): Object[];
    entryIterator(): Iterator<E>;
    find(key: K, hash: number): E;
    find(key: K, hash: number, shift: number): E;
    forEachEntry(consumer: (param0: E) => void): void;
    hash(key: K): number;
    isEmpty(): boolean;
    key(entry: E): K;
    put(key: K, hash: number, entry: E): TrieNode<K, V, E>;
    put(key: K, hash: number, entry: E, shift: number): TrieNode<K, V, E>;
    remove(key: K, hash: number): TrieNode<K, V, E>;
    remove(key: K, hash: number, shift: number): TrieNode<K, V, E>;
    toString(): string;
    // private toStringIndent(indent: number): string;
    verify(shift: number): boolean;
}
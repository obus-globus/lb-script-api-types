import type { AbstractMap$SimpleImmutableEntry } from '../../../../java/util/AbstractMap$SimpleImmutableEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HashBiMap$BiEntry<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends AbstractMap$SimpleImmutableEntry<K, V> {
    constructor(key: K, keyHash: number, value: V, valueHash: number)
    // private keyHash: number;
    // private nextInKToVBucket: HashBiMap$BiEntry<K, V>;
    // private nextInKeyInsertionOrder: HashBiMap$BiEntry<K, V>;
    // private nextInVToKBucket: HashBiMap$BiEntry<K, V>;
    // private prevInKeyInsertionOrder: HashBiMap$BiEntry<K, V>;
    // private valueHash: number;
}
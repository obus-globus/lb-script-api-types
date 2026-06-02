import type { AbstractMultimap } from '../../../../com/google/common/collect/AbstractMultimap.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { SetMultimap } from '../../../../com/google/common/collect/SetMultimap.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class Multimaps$MapMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends AbstractMultimap<K, V> implements SetMultimap<K, V>, Serializable {
    constructor(map: Map<K, V>)
    // private map: Map<K, V>;
    clear(): void;
    containsEntry(key: Object, value: Object): boolean;
    containsKey(key: Object): boolean;
    containsValue(value: Object): boolean;
    createAsMap(): Map<K, E[]>;
    createEntries(): E[];
    createKeySet(): K[];
    createKeys(): K[];
    createValues(): E[];
    entries(): Map$Entry<K, V>[];
    entryIterator(): Iterator<Map$Entry<K, V>>;
    get(key: K): V[];
    hashCode(): number;
    put(key: K, value: V): boolean;
    putAll(key: K, values: V[]): boolean;
    putAll(multimap: Multimap<K, V>): boolean;
    remove(key: Object, value: Object): boolean;
    removeAll(key: Object): V[];
    replaceValues(key: K, values: V[]): V[];
    size(): number;
}
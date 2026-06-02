import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { Spliterator } from '../../../../java/util/Spliterator.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export abstract class AbstractMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object implements Multimap<K, V> {
    constructor()
    // private asMap: Map<K, E[]>;
    // private entries: E[];
    // private keySet: K[];
    // private keys: K[];
    // private values: E[];
    asMap(): Map<K, E[]>;
    containsEntry(key: Object, value: Object): boolean;
    containsValue(value: Object): boolean;
    createAsMap(): Map<K, E[]>;
    createEntries(): E[];
    createKeySet(): K[];
    createKeys(): K[];
    createValues(): E[];
    entries(): E[];
    entryIterator(): Iterator<Map$Entry<K, V>>;
    entrySpliterator(): Spliterator<Map$Entry<K, V>>;
    equals(object: Object | null): boolean;
    forEach(action: (param0: K, param1: V) => void): void;
    hashCode(): number;
    isEmpty(): boolean;
    keySet(): K[];
    keys(): K[];
    put(key: K, value: V): boolean;
    putAll(key: K, values: V[]): boolean;
    putAll(multimap: Multimap<K, V>): boolean;
    remove(key: Object, value: Object): boolean;
    replaceValues(key: K, values: V[]): E[];
    toString(): string;
    valueIterator(): Iterator<V>;
    valueSpliterator(): Spliterator<V>;
    values(): E[];
}
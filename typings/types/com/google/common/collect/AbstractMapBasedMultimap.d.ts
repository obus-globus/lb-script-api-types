import type { AbstractMultimap } from '../../../../com/google/common/collect/AbstractMultimap.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Spliterator } from '../../../../java/util/Spliterator.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export abstract class AbstractMapBasedMultimap<K extends unknown, V extends unknown> extends AbstractMultimap<K, V> implements Serializable {
    constructor(map: Map<K, V[]>)
    // private map: Map<K, V[]>;
    // private totalSize: number;
    backingMap(): Map<K, V[]>;
    clear(): void;
    containsKey(key: Object): boolean;
    createAsMap(): Map<K, V[]>;
    createCollection(): V[];
    createCollection(key: K): V[];
    createEntries(): Map$Entry<K, V>[];
    createKeySet(): K[];
    createKeys(): K[];
    createMaybeNavigableAsMap(): Map<K, V[]>;
    createMaybeNavigableKeySet(): K[];
    createUnmodifiableEmptyCollection(): V[];
    createValues(): V[];
    entries(): Map$Entry<K, V>[];
    entryIterator(): Iterator<Map$Entry<K, V>>;
    entrySpliterator(): Spliterator<Map$Entry<K, V>>;
    forEach(action: (param0: K, param1: V) => void): void;
    get(key: K): V[];
    // private getOrCreateCollection(key: K): V[];
    put(key: K, value: V): boolean;
    removeAll(key: Object): V[];
    // private removeValuesForKey(key: Object): void;
    replaceValues(key: K, values: V[]): V[];
    setMap(map: Map<K, V[]>): void;
    size(): number;
    unmodifiableCollectionSubclass<E extends unknown>(collection: E[]): E[];
    valueIterator(): Iterator<V>;
    valueSpliterator(): Spliterator<V>;
    values(): V[];
    wrapCollection(key: K, collection: V[]): V[];
    wrapList(key: K, list: V[], ancestor: (Object | null)[]): V[];
}
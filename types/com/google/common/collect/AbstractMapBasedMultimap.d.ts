import type { AbstractMultimap } from '../../../../com/google/common/collect/AbstractMultimap.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Spliterator } from '../../../../java/util/Spliterator.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export abstract class AbstractMapBasedMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends AbstractMultimap<K, V> implements Serializable {
    constructor(map: Map<K, E[]>)
    // private map: Map<K, E[]>;
    // private totalSize: number;
    backingMap(): Map<K, E[]>;
    clear(): void;
    containsKey(key: Object): boolean;
    createAsMap(): Map<K, E[]>;
    createCollection(): E[];
    createCollection(key: K): E[];
    createEntries(): E[];
    createKeySet(): K[];
    createKeys(): K[];
    createMaybeNavigableAsMap(): Map<K, E[]>;
    createMaybeNavigableKeySet(): K[];
    createUnmodifiableEmptyCollection(): E[];
    createValues(): E[];
    entries(): E[];
    entryIterator(): Iterator<Map$Entry<K, V>>;
    entrySpliterator(): Spliterator<Map$Entry<K, V>>;
    forEach(action: (param0: K, param1: V) => void): void;
    get(key: K): E[];
    // private getOrCreateCollection(key: K): E[];
    put(key: K, value: V): boolean;
    removeAll(key: Object): E[];
    // private removeValuesForKey(key: Object): void;
    replaceValues(key: K, values: V[]): E[];
    setMap(map: Map<K, E[]>): void;
    size(): number;
    unmodifiableCollectionSubclass(collection: E[]): E[];
    valueIterator(): Iterator<V>;
    valueSpliterator(): Spliterator<V>;
    values(): E[];
    wrapCollection(key: K, collection: E[]): E[];
    wrapList(key: K, list: V[], ancestor: (Object | null)[]): V[];
}
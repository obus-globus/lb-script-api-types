import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractMapBasedMultimap } from '../../../../com/google/common/collect/AbstractMapBasedMultimap.d.ts'
import type { SetMultimap } from '../../../../com/google/common/collect/SetMultimap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export abstract class AbstractSetMultimap<K extends unknown, V extends unknown> extends AbstractMapBasedMultimap<K, V> implements SetMultimap<K, V> {
    constructor(map: JavaMap<K, V[]>)
    asMap(): JavaMap<K, V[]>;
    createCollection(): V[];
    createCollection(key: K): V[];
    createUnmodifiableEmptyCollection(): V[];
    entries(): Map$Entry<K, V>[];
    equals(object: Object | null): boolean;
    get(key: K): V[];
    put(key: K, value: V): boolean;
    removeAll(key: Object): V[];
    replaceValues(key: K, values: V[]): V[];
    unmodifiableCollectionSubclass<E extends unknown>(collection: E[]): E[];
    wrapCollection(key: K, collection: V[]): V[];
}
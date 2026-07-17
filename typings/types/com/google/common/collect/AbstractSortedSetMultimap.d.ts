import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractSetMultimap } from '../../../../com/google/common/collect/AbstractSetMultimap.d.ts'
import type { SortedSetMultimap } from '../../../../com/google/common/collect/SortedSetMultimap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractSortedSetMultimap<K extends unknown, V extends unknown> extends AbstractSetMultimap<K, V> implements SortedSetMultimap<K, V> {
    constructor(map: JavaMap<K, V[]>)
    asMap(): JavaMap<K, V[]>;
    createCollection(): V[];
    createCollection(key: K): V[];
    createUnmodifiableEmptyCollection(): V[];
    get(key: K): V[];
    removeAll(key: Object): V[];
    replaceValues(key: K, values: V[]): V[];
    unmodifiableCollectionSubclass<E extends unknown>(collection: E[]): E[];
    values(): V[];
    wrapCollection(key: K, collection: V[]): V[];
}
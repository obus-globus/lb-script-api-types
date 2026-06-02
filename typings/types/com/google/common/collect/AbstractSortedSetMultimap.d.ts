import type { AbstractSetMultimap } from '../../../../com/google/common/collect/AbstractSetMultimap.d.ts'
import type { SortedSetMultimap } from '../../../../com/google/common/collect/SortedSetMultimap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractSortedSetMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends AbstractSetMultimap<K, V> implements SortedSetMultimap<K, V> {
    constructor(map: Map<K, E[]>)
    asMap(): Map<K, E[]>;
    createCollection(): V[];
    createUnmodifiableEmptyCollection(): V[];
    get(key: K): V[];
    removeAll(key: Object): V[];
    replaceValues(key: K, values: V[]): V[];
    unmodifiableCollectionSubclass(collection: E[]): E[];
    values(): E[];
    wrapCollection(key: K, collection: E[]): E[];
}
import type { AbstractMapBasedMultimap } from '../../../../com/google/common/collect/AbstractMapBasedMultimap.d.ts'
import type { ListMultimap } from '../../../../com/google/common/collect/ListMultimap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractListMultimap<K extends unknown, V extends unknown> extends AbstractMapBasedMultimap<K, V> implements ListMultimap<K, V> {
    constructor(map: Map<K, V[]>)
    asMap(): Map<K, V[]>;
    createCollection(): V[];
    createCollection(key: K): V[];
    createUnmodifiableEmptyCollection(): V[];
    equals(object: Object | null): boolean;
    get(key: K): V[];
    put(key: K, value: V): boolean;
    removeAll(key: Object): V[];
    replaceValues(key: K, values: V[]): V[];
    unmodifiableCollectionSubclass<E extends unknown>(collection: E[]): E[];
    wrapCollection(key: K, collection: V[]): V[];
}
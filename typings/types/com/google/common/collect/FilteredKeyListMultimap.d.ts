import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { FilteredKeyMultimap } from '../../../../com/google/common/collect/FilteredKeyMultimap.d.ts'
import type { ListMultimap } from '../../../../com/google/common/collect/ListMultimap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FilteredKeyListMultimap<K extends unknown, V extends unknown> extends FilteredKeyMultimap<K, V> implements ListMultimap<K, V> {
    constructor(unfiltered: ListMultimap<K, V>, keyPredicate: (param0: K) => boolean)
    get(key: K): V[];
    removeAll(key: Object): V[];
    replaceValues(key: K, values: V[]): V[];
    unfiltered(): ListMultimap<K, V>;
}
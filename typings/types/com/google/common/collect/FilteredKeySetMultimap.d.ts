import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { FilteredKeyMultimap } from '../../../../com/google/common/collect/FilteredKeyMultimap.d.ts'
import type { FilteredSetMultimap } from '../../../../com/google/common/collect/FilteredSetMultimap.d.ts'
import type { SetMultimap } from '../../../../com/google/common/collect/SetMultimap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class FilteredKeySetMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends FilteredKeyMultimap<K, V> implements FilteredSetMultimap<K, V> {
    constructor(unfiltered: SetMultimap<K, V>, keyPredicate: (param0: Object) => boolean)
    createEntries(): Map$Entry<K, V>[];
    entries(): Map$Entry<K, V>[];
    get(key: K): V[];
    removeAll(key: Object): V[];
    replaceValues(key: K, values: V[]): V[];
    unfiltered(): SetMultimap<K, V>;
}
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { FilteredEntryMultimap } from '../../../../com/google/common/collect/FilteredEntryMultimap.d.ts'
import type { FilteredSetMultimap } from '../../../../com/google/common/collect/FilteredSetMultimap.d.ts'
import type { SetMultimap } from '../../../../com/google/common/collect/SetMultimap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class FilteredEntrySetMultimap<K extends unknown, V extends unknown> extends FilteredEntryMultimap<K, V> implements FilteredSetMultimap<K, V> {
    constructor(unfiltered: SetMultimap<K, V>, predicate: (param0: Map$Entry<K, V>) => boolean)
    createEntries(): Map$Entry<K, V>[];
    entries(): Map$Entry<K, V>[];
    get(key: K): V[];
    removeAll(key: Object): V[];
    replaceValues(key: K, values: V[]): V[];
    unfiltered(): SetMultimap<K, V>;
}
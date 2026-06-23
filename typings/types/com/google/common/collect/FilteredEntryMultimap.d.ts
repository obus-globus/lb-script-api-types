import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { AbstractMultimap } from '../../../../com/google/common/collect/AbstractMultimap.d.ts'
import type { FilteredMultimap } from '../../../../com/google/common/collect/FilteredMultimap.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class FilteredEntryMultimap<K extends unknown, V extends unknown> extends AbstractMultimap<K, V> implements FilteredMultimap<K, V> {
    constructor(unfiltered: Multimap<K, V>, predicate: (param0: Object) => boolean)
    // private predicate: (param0: Object) => boolean;
    // private unfiltered: Multimap<K, V>;
    clear(): void;
    containsKey(key: Object): boolean;
    createAsMap(): Map<K, V[]>;
    createEntries(): Map$Entry<K, V>[];
    createKeySet(): K[];
    createKeys(): K[];
    createValues(): V[];
    entryIterator(): Iterator<Map$Entry<K, V>>;
    entryPredicate(): (param0: Object) => boolean;
    get(key: K): V[];
    removeAll(key: Object): V[];
    removeEntriesIf(predicate: (param0: Object) => boolean): boolean;
    // private satisfies(key: K, value: V): boolean;
    size(): number;
    unfiltered(): Multimap<K, V>;
    unmodifiableEmptyCollection(): V[];
}
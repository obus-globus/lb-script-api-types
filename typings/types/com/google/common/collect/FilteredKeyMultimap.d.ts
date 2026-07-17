import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { AbstractMultimap } from '../../../../com/google/common/collect/AbstractMultimap.d.ts'
import type { FilteredMultimap } from '../../../../com/google/common/collect/FilteredMultimap.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class FilteredKeyMultimap<K extends unknown, V extends unknown> extends AbstractMultimap<K, V> implements FilteredMultimap<K, V> {
    constructor(unfiltered: Multimap<K, V>, keyPredicate: (param0: K) => boolean)
    // private keyPredicate: (param0: K) => boolean;
    // private unfiltered: Multimap<K, V>;
    clear(): void;
    containsKey(key: Object): boolean;
    createAsMap(): JavaMap<K, V[]>;
    createEntries(): Map$Entry<K, V>[];
    createKeySet(): K[];
    createKeys(): K[];
    createValues(): V[];
    entryIterator(): Iterator<Map$Entry<K, V>>;
    entryPredicate(): (param0: Map$Entry<K, V>) => boolean;
    get(key: K): V[];
    removeAll(key: Object): V[];
    size(): number;
    unfiltered(): Multimap<K, V>;
    unmodifiableEmptyCollection(): V[];
}
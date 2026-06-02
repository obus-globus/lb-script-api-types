import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { AbstractMultimap } from '../../../../com/google/common/collect/AbstractMultimap.d.ts'
import type { FilteredMultimap } from '../../../../com/google/common/collect/FilteredMultimap.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class FilteredKeyMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends AbstractMultimap<K, V> implements FilteredMultimap<K, V> {
    constructor(unfiltered: Multimap<K, V>, keyPredicate: (param0: K) => kotlin.Boolean)
    // private keyPredicate: (param0: K) => kotlin.Boolean;
    // private unfiltered: Multimap<K, V>;
    clear(): void;
    containsKey(key: Object): boolean;
    createAsMap(): Map<K, E[]>;
    createEntries(): E[];
    createKeySet(): K[];
    createKeys(): K[];
    createValues(): E[];
    entryIterator(): Iterator<Map$Entry<K, V>>;
    entryPredicate(): (param0: Map$Entry<K, V>) => kotlin.Boolean;
    get(key: K): E[];
    removeAll(key: Object): E[];
    size(): number;
    unfiltered(): Multimap<K, V>;
    unmodifiableEmptyCollection(): E[];
}
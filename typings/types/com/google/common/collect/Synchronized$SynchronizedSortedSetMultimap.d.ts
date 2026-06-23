import type { SortedSetMultimap } from '../../../../com/google/common/collect/SortedSetMultimap.d.ts'
import type { Synchronized$SynchronizedSetMultimap } from '../../../../com/google/common/collect/Synchronized$SynchronizedSetMultimap.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Synchronized$SynchronizedSortedSetMultimap<K extends unknown, V extends unknown> extends Synchronized$SynchronizedSetMultimap<K, V> implements SortedSetMultimap<K, V> {
    constructor(delegate: SortedSetMultimap<K, V>, mutex: Object)
    delegate(): SortedSetMultimap<K, V>;
    get(key: K): V[];
    removeAll(key: Object): V[];
    replaceValues(key: K, values: V[]): V[];
    valueComparator(): (param0: Object) => boolean;
}
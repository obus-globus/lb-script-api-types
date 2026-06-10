import type { Multimaps$UnmodifiableSetMultimap } from '../../../../com/google/common/collect/Multimaps$UnmodifiableSetMultimap.d.ts'
import type { SortedSetMultimap } from '../../../../com/google/common/collect/SortedSetMultimap.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Multimaps$UnmodifiableSortedSetMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Multimaps$UnmodifiableSetMultimap<K, V> implements SortedSetMultimap<K, V> {
    constructor(delegate: SortedSetMultimap<K, V>)
    delegate(): SortedSetMultimap<K, V>;
    get(key: K): V[];
    removeAll(key: Object): V[];
    replaceValues(key: K, values: V[]): V[];
    valueComparator(): (param0: Object) => boolean;
}
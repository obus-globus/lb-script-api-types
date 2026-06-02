import type { ForwardingSetMultimap } from '../../../../com/google/common/collect/ForwardingSetMultimap.d.ts'
import type { SortedSetMultimap } from '../../../../com/google/common/collect/SortedSetMultimap.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ForwardingSortedSetMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends ForwardingSetMultimap<K, V> implements SortedSetMultimap<K, V> {
    constructor()
    delegate(): SortedSetMultimap<K, V>;
    get(key: K): V[];
    removeAll(key: Object): V[];
    replaceValues(key: K, values: V[]): V[];
    valueComparator(): (param0: V) => kotlin.Boolean;
}
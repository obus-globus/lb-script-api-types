import type { SetMultimap } from '../../../../com/google/common/collect/SetMultimap.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface SortedSetMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends SetMultimap<K, V>, Object{
    asMap(): Map<K, E[]>;
    get(key: K): V[];
    removeAll(key: Object): V[];
    replaceValues(key: K, values: V[]): V[];
    valueComparator(): (param0: V) => kotlin.Boolean;
}
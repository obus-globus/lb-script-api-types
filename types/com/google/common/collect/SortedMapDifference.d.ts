import type { MapDifference } from '../../../../com/google/common/collect/MapDifference.d.ts'
import type { MapDifference$ValueDifference } from '../../../../com/google/common/collect/MapDifference$ValueDifference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface SortedMapDifference<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends MapDifference<K, V>, Object{
    entriesDiffering(): Map<K, MapDifference$ValueDifference<V>>;
    entriesInCommon(): Map<K, V>;
    entriesOnlyOnLeft(): Map<K, V>;
    entriesOnlyOnRight(): Map<K, V>;
}
import type { MapDifference$ValueDifference } from '../../../../com/google/common/collect/MapDifference$ValueDifference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MapDifference<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object{
    areEqual(): boolean;
    entriesDiffering(): Map<K, MapDifference$ValueDifference<V>>;
    entriesInCommon(): Map<K, V>;
    entriesOnlyOnLeft(): Map<K, V>;
    entriesOnlyOnRight(): Map<K, V>;
}
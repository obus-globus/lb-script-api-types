import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { MapDifference$ValueDifference } from '../../../../com/google/common/collect/MapDifference$ValueDifference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MapDifference<K extends unknown, V extends unknown> extends Object{
    areEqual(): boolean;
    entriesDiffering(): JavaMap<K, MapDifference$ValueDifference<V>>;
    entriesInCommon(): JavaMap<K, V>;
    entriesOnlyOnLeft(): JavaMap<K, V>;
    entriesOnlyOnRight(): JavaMap<K, V>;
}
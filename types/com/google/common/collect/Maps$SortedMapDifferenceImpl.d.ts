import type { MapDifference$ValueDifference } from '../../../../com/google/common/collect/MapDifference$ValueDifference.d.ts'
import type { Maps$MapDifferenceImpl } from '../../../../com/google/common/collect/Maps$MapDifferenceImpl.d.ts'
import type { SortedMapDifference } from '../../../../com/google/common/collect/SortedMapDifference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Maps$SortedMapDifferenceImpl<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Maps$MapDifferenceImpl<K, V> implements SortedMapDifference<K, V> {
    constructor(onlyOnLeft: Map<K, V>, onlyOnRight: Map<K, V>, onBoth: Map<K, V>, differences: Map<K, MapDifference$ValueDifference<V>>)
    entriesDiffering(): Map<K, MapDifference$ValueDifference<V>>;
    entriesInCommon(): Map<K, V>;
    entriesOnlyOnLeft(): Map<K, V>;
    entriesOnlyOnRight(): Map<K, V>;
}
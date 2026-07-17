import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { MapDifference$ValueDifference } from '../../../../com/google/common/collect/MapDifference$ValueDifference.d.ts'
import type { Maps$MapDifferenceImpl } from '../../../../com/google/common/collect/Maps$MapDifferenceImpl.d.ts'
import type { SortedMapDifference } from '../../../../com/google/common/collect/SortedMapDifference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Maps$SortedMapDifferenceImpl<K extends unknown, V extends unknown> extends Maps$MapDifferenceImpl<K, V> implements SortedMapDifference<K, V> {
    constructor(onlyOnLeft: JavaMap<K, V>, onlyOnRight: JavaMap<K, V>, onBoth: JavaMap<K, V>, differences: JavaMap<K, MapDifference$ValueDifference<V>>)
    entriesDiffering(): JavaMap<K, MapDifference$ValueDifference<V>>;
    entriesInCommon(): JavaMap<K, V>;
    entriesOnlyOnLeft(): JavaMap<K, V>;
    entriesOnlyOnRight(): JavaMap<K, V>;
}
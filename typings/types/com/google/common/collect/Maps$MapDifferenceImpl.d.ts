import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { MapDifference } from '../../../../com/google/common/collect/MapDifference.d.ts'
import type { MapDifference$ValueDifference } from '../../../../com/google/common/collect/MapDifference$ValueDifference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Maps$MapDifferenceImpl<K extends unknown, V extends unknown> extends Object implements MapDifference<K, V> {
    constructor(onlyOnLeft: JavaMap<K, V>, onlyOnRight: JavaMap<K, V>, onBoth: JavaMap<K, V>, differences: JavaMap<K, MapDifference$ValueDifference<V>>)
    // private differences: JavaMap<K, MapDifference$ValueDifference<V>>;
    // private onBoth: JavaMap<K, V>;
    // private onlyOnLeft: JavaMap<K, V>;
    // private onlyOnRight: JavaMap<K, V>;
    areEqual(): boolean;
    entriesDiffering(): JavaMap<K, MapDifference$ValueDifference<V>>;
    entriesInCommon(): JavaMap<K, V>;
    entriesOnlyOnLeft(): JavaMap<K, V>;
    entriesOnlyOnRight(): JavaMap<K, V>;
    equals(object: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
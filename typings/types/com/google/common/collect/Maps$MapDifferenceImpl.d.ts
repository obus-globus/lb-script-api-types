import type { MapDifference } from '../../../../com/google/common/collect/MapDifference.d.ts'
import type { MapDifference$ValueDifference } from '../../../../com/google/common/collect/MapDifference$ValueDifference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Maps$MapDifferenceImpl<K extends unknown, V extends unknown> extends Object implements MapDifference<K, V> {
    constructor(onlyOnLeft: Map<K, V>, onlyOnRight: Map<K, V>, onBoth: Map<K, V>, differences: Map<K, MapDifference$ValueDifference<V>>)
    // private differences: Map<K, MapDifference$ValueDifference<V>>;
    // private onBoth: Map<K, V>;
    // private onlyOnLeft: Map<K, V>;
    // private onlyOnRight: Map<K, V>;
    areEqual(): boolean;
    entriesDiffering(): Map<K, MapDifference$ValueDifference<V>>;
    entriesInCommon(): Map<K, V>;
    entriesOnlyOnLeft(): Map<K, V>;
    entriesOnlyOnRight(): Map<K, V>;
    equals(object: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}
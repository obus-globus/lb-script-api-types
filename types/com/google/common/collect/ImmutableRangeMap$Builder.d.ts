import type { ImmutableRangeMap } from '../../../../com/google/common/collect/ImmutableRangeMap.d.ts'
import type { Range } from '../../../../com/google/common/collect/Range.d.ts'
import type { RangeMap } from '../../../../com/google/common/collect/RangeMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class ImmutableRangeMap$Builder<K extends Comparable<Object>, V extends Object | number | string | boolean> extends Object {
    constructor()
    // private entries: Map$Entry<Range<K>, V>[];
    build(): ImmutableRangeMap<K, V>;
    combine(builder: ImmutableRangeMap$Builder<K, V>): ImmutableRangeMap$Builder<K, V>;
    put(range: Range<K>, value: V): ImmutableRangeMap$Builder<K, V>;
    putAll(rangeMap: RangeMap<K, V>): ImmutableRangeMap$Builder<K, V>;
}
import type { Cut } from '../../../../com/google/common/collect/Cut.d.ts'
import type { Range } from '../../../../com/google/common/collect/Range.d.ts'
import type { AbstractMap$SimpleImmutableEntry } from '../../../../java/util/AbstractMap$SimpleImmutableEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class TreeRangeMap$RangeMapEntry<K extends Comparable<Object>, V extends unknown> extends AbstractMap$SimpleImmutableEntry<Range<K>, V> {
    constructor(lowerBound: Cut<K>, upperBound: Cut<K>, value: V)
    constructor(range: Range<K>, value: V)
    contains(value: K): boolean;
    getLowerBound(): Cut<K>;
    getUpperBound(): Cut<K>;
}
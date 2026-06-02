import type { ImmutableRangeSet } from '../../../../com/google/common/collect/ImmutableRangeSet.d.ts'
import type { Range } from '../../../../com/google/common/collect/Range.d.ts'
import type { RangeSet } from '../../../../com/google/common/collect/RangeSet.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class ImmutableRangeSet$Builder<C extends Comparable<Object>> extends Object {
    constructor()
    // private ranges: Range<C>[];
    add(range: Range<C>): ImmutableRangeSet$Builder<C>;
    addAll(ranges: RangeSet<C>): ImmutableRangeSet$Builder<C>;
    addAll(ranges: Range<C>[]): ImmutableRangeSet$Builder<C>;
    build(): ImmutableRangeSet<C>;
    combine(builder: ImmutableRangeSet$Builder<C>): ImmutableRangeSet$Builder<C>;
}
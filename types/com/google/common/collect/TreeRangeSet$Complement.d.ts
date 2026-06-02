import type { Range } from '../../../../com/google/common/collect/Range.d.ts'
import type { RangeSet } from '../../../../com/google/common/collect/RangeSet.d.ts'
import type { TreeRangeSet } from '../../../../com/google/common/collect/TreeRangeSet.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class TreeRangeSet$Complement extends TreeRangeSet<C> {
    static create(): TreeRangeSet<Object>;
    static create(paramrangeSet: RangeSet<Object>): TreeRangeSet<Object>;
    static create(paramranges: (Object | null)[]): TreeRangeSet<Object>;
    constructor(null_: TreeRangeSet$Complement)
    add(rangeToAdd: Range<C>): void;
    complement(): RangeSet<C>;
    contains<C extends Comparable<Object>>(value: C): boolean;
    remove(rangeToRemove: Range<C>): void;
}
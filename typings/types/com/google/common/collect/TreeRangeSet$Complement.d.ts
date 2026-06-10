import type { Range } from '../../../../com/google/common/collect/Range.d.ts'
import type { RangeSet } from '../../../../com/google/common/collect/RangeSet.d.ts'
import type { TreeRangeSet } from '../../../../com/google/common/collect/TreeRangeSet.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class TreeRangeSet$Complement extends TreeRangeSet<C> {
    static create(): TreeRangeSet<Object>;
    static create(paramrangeSet: RangeSet<Object>): TreeRangeSet<Object>;
    static create(paramranges: Range<Object>[]): TreeRangeSet<Object>;
    constructor(null_: TreeRangeSet$Complement)
    add<C extends Comparable<Object>>(rangeToAdd: Range<C>): void;
    complement<C extends Comparable<Object>>(): RangeSet<C>;
    contains<C extends Comparable<Object>>(value: C): boolean;
    remove<C extends Comparable<Object>>(rangeToRemove: Range<C>): void;
}
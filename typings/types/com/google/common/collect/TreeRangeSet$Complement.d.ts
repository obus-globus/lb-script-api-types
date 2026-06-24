import type { Range } from '../../../../com/google/common/collect/Range.d.ts'
import type { RangeSet } from '../../../../com/google/common/collect/RangeSet.d.ts'
import type { TreeRangeSet } from '../../../../com/google/common/collect/TreeRangeSet.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class TreeRangeSet$Complement extends TreeRangeSet<C> {
    static create(): TreeRangeSet<any>;
    static create(paramrangeSet: RangeSet<any>): TreeRangeSet<any>;
    static create(paramranges: Range<any>[]): TreeRangeSet<any>;
    constructor(null_: TreeRangeSet<C>)
    add<C extends Comparable<Object>>(rangeToAdd: Range<C>): void;
    complement<C extends Comparable<Object>>(): RangeSet<C>;
    contains<C extends Comparable<Object>>(value: C): boolean;
    remove<C extends Comparable<Object>>(rangeToRemove: Range<C>): void;
}
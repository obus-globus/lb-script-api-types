import type { Range } from '../../../../com/google/common/collect/Range.d.ts'
import type { RangeSet } from '../../../../com/google/common/collect/RangeSet.d.ts'
import type { TreeRangeSet } from '../../../../com/google/common/collect/TreeRangeSet.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class TreeRangeSet$SubRangeSet extends TreeRangeSet<C> {
    static create<C extends Comparable<Object>>(): TreeRangeSet<C>;
    static create<C extends Comparable<Object>>(paramrangeSet: RangeSet<C>): TreeRangeSet<C>;
    static create<C extends Comparable<Object>>(paramranges: Range<C>[]): TreeRangeSet<C>;
    constructor(null_: TreeRangeSet<Comparable<Object>>, restriction: Range<Comparable<Object>>)
    // private restriction: Range<C>;
    add<C extends Comparable<Object>>(rangeToAdd: Range<C>): void;
    clear(): void;
    contains<C extends Comparable<Object>>(value: C): boolean;
    encloses<C extends Comparable<Object>>(range: Range<C>): boolean;
    rangeContaining<C extends Comparable<Object>>(value: C): Range<C>;
    remove<C extends Comparable<Object>>(rangeToRemove: Range<C>): void;
    subRangeSet<C extends Comparable<Object>>(view: Range<C>): RangeSet<C>;
}
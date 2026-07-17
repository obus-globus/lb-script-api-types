import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractRangeSet } from '../../../../com/google/common/collect/AbstractRangeSet.d.ts'
import type { Cut } from '../../../../com/google/common/collect/Cut.d.ts'
import type { Range } from '../../../../com/google/common/collect/Range.d.ts'
import type { RangeSet } from '../../../../com/google/common/collect/RangeSet.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class TreeRangeSet<C extends Comparable<Object>> extends AbstractRangeSet<C> implements Serializable {
    static create<C extends Comparable<Object>>(): TreeRangeSet<C>;
    static create<C extends Comparable<Object>>(paramrangeSet: RangeSet<C>): TreeRangeSet<C>;
    static create<C extends Comparable<Object>>(paramranges: Range<C>[]): TreeRangeSet<C>;
    private constructor(rangesByLowerCut: JavaMap<Cut<C>, Range<C>>)
    // private asDescendingSetOfRanges: Range<C>[];
    // private asRanges: Range<C>[];
    // private complement: RangeSet<C>;
    // private rangesByLowerBound: JavaMap<Cut<C>, Range<C>>;
    add(rangeToAdd: Range<C>): void;
    asDescendingSetOfRanges(): Range<C>[];
    asRanges(): Range<C>[];
    complement(): RangeSet<C>;
    encloses(range: Range<C>): boolean;
    intersects(range: Range<C>): boolean;
    rangeContaining(value: C): Range<C>;
    // private rangeEnclosing(range: Range<C>): Range<C>;
    remove(rangeToRemove: Range<C>): void;
    // private replaceRangeWithSameLowerBound(range: Range<C>): void;
    span(): Range<C>;
    subRangeSet(view: Range<C>): RangeSet<C>;
}
import type { AbstractSequentialIterator } from '../../../../com/google/common/collect/AbstractSequentialIterator.d.ts'
import type { DiscreteDomain } from '../../../../com/google/common/collect/DiscreteDomain.d.ts'
import type { Range } from '../../../../com/google/common/collect/Range.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class RegularContiguousSet$SerializedForm<C extends Comparable<Object>> extends Object implements Serializable {
    constructor(arg0: Range<Comparable<Object>>, arg1: DiscreteDomain<Comparable<Object>>, arg2: AbstractSequentialIterator<C>)
    // private domain: DiscreteDomain<C>;
    // private range: Range<C>;
    // private readResolve(): Object;
}
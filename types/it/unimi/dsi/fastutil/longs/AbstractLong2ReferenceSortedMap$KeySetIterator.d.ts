import type { Long2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceMap$Entry.d.ts'
import type { LongBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongBidirectionalIterator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractLong2ReferenceSortedMap$KeySetIterator<V extends Object | number | string | boolean> extends Object implements LongBidirectionalIterator {
    constructor(arg0: ObjectBidirectionalIterator<Long2ReferenceMap$Entry<V>>)
    // private i: ObjectBidirectionalIterator<Long2ReferenceMap$Entry<V>>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextLong(): number;
    previous(): number;
    previousLong(): number;
    skip(arg0: number): number;
}
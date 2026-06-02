import type { Long2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ObjectMap$Entry.d.ts'
import type { LongBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongBidirectionalIterator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractLong2ObjectSortedMap$KeySetIterator<V extends Object | number | string | boolean> extends Object implements LongBidirectionalIterator {
    constructor(arg0: ObjectBidirectionalIterator<Long2ObjectMap$Entry<V>>)
    // private i: ObjectBidirectionalIterator<Long2ObjectMap$Entry<V>>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextLong(): number;
    previous(): number;
    previousLong(): number;
    skip(arg0: number): number;
}
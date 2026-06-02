import type { Long2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortMap$Entry.d.ts'
import type { LongBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongBidirectionalIterator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractLong2ShortSortedMap$KeySetIterator extends Object implements LongBidirectionalIterator {
    constructor(arg0: ObjectBidirectionalIterator<Long2ShortMap$Entry>)
    // private i: ObjectBidirectionalIterator<Long2ShortMap$Entry>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextLong(): number;
    previous(): number;
    previousLong(): number;
    skip(arg0: number): number;
}
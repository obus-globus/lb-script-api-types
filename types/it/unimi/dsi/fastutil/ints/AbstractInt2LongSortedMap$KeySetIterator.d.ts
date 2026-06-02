import type { Int2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2LongMap$Entry.d.ts'
import type { IntBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntBidirectionalIterator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractInt2LongSortedMap$KeySetIterator extends Object implements IntBidirectionalIterator {
    constructor(arg0: ObjectBidirectionalIterator<Int2LongMap$Entry>)
    // private i: ObjectBidirectionalIterator<Int2LongMap$Entry>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    skip(arg0: number): number;
}
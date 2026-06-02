import type { Double2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongMap$Entry.d.ts'
import type { DoubleBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleBidirectionalIterator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractDouble2LongSortedMap$KeySetIterator extends Object implements DoubleBidirectionalIterator {
    constructor(arg0: ObjectBidirectionalIterator<Double2LongMap$Entry>)
    // private i: ObjectBidirectionalIterator<Double2LongMap$Entry>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextDouble(): number;
    previous(): number;
    previousDouble(): number;
    skip(arg0: number): number;
}
import type { Double2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharMap$Entry.d.ts'
import type { DoubleBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleBidirectionalIterator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractDouble2CharSortedMap$KeySetIterator extends Object implements DoubleBidirectionalIterator {
    constructor(arg0: ObjectBidirectionalIterator<Double2CharMap$Entry>)
    // private i: ObjectBidirectionalIterator<Double2CharMap$Entry>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextDouble(): number;
    previous(): number;
    previousDouble(): number;
    skip(arg0: number): number;
}
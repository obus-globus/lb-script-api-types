import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Short2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleMap$Entry.d.ts'
import type { ShortBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractShort2DoubleSortedMap$KeySetIterator extends Object implements ShortBidirectionalIterator {
    constructor(arg0: ObjectBidirectionalIterator<Short2DoubleMap$Entry>)
    // private i: ObjectBidirectionalIterator<Short2DoubleMap$Entry>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextShort(): number;
    previous(): number;
    previousShort(): number;
    skip(arg0: number): number;
}
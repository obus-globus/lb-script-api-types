import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Short2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharMap$Entry.d.ts'
import type { ShortBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractShort2CharSortedMap$KeySetIterator extends Object implements ShortBidirectionalIterator {
    constructor(arg0: ObjectBidirectionalIterator<Short2CharMap$Entry>)
    // private i: ObjectBidirectionalIterator<Short2CharMap$Entry>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextShort(): number;
    previous(): number;
    previousShort(): number;
    skip(arg0: number): number;
}
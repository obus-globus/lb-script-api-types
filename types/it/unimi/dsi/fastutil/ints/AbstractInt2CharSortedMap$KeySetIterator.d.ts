import type { Int2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharMap$Entry.d.ts'
import type { IntBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntBidirectionalIterator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractInt2CharSortedMap$KeySetIterator extends Object implements IntBidirectionalIterator {
    constructor(arg0: ObjectBidirectionalIterator<Int2CharMap$Entry>)
    // private i: ObjectBidirectionalIterator<Int2CharMap$Entry>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    skip(arg0: number): number;
}
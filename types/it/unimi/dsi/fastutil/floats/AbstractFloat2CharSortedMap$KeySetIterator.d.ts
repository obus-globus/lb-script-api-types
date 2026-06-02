import type { Float2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharMap$Entry.d.ts'
import type { FloatBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatBidirectionalIterator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractFloat2CharSortedMap$KeySetIterator extends Object implements FloatBidirectionalIterator {
    constructor(arg0: ObjectBidirectionalIterator<Float2CharMap$Entry>)
    // private i: ObjectBidirectionalIterator<Float2CharMap$Entry>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextFloat(): number;
    previous(): number;
    previousFloat(): number;
    skip(arg0: number): number;
}
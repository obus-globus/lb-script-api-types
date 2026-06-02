import type { Float2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceMap$Entry.d.ts'
import type { FloatBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatBidirectionalIterator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractFloat2ReferenceSortedMap$KeySetIterator<V extends Object | number | string | boolean> extends Object implements FloatBidirectionalIterator {
    constructor(arg0: ObjectBidirectionalIterator<Float2ReferenceMap$Entry<V>>)
    // private i: ObjectBidirectionalIterator<Float2ReferenceMap$Entry<V>>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextFloat(): number;
    previous(): number;
    previousFloat(): number;
    skip(arg0: number): number;
}
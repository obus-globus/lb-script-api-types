import type { Object2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanMap$Entry.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractObject2BooleanSortedMap$KeySetIterator<K extends Object | number | string | boolean> extends Object implements ObjectBidirectionalIterator<K> {
    constructor(arg0: ObjectBidirectionalIterator<Object2BooleanMap$Entry<K>>)
    // private i: ObjectBidirectionalIterator<Object2BooleanMap$Entry<K>>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): K;
    previous(): K;
    skip(arg0: number): number;
}
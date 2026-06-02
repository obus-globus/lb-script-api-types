import type { Object2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteMap$Entry.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractObject2ByteSortedMap$KeySetIterator<K extends Object | number | string | boolean> extends Object implements ObjectBidirectionalIterator<K> {
    constructor(arg0: ObjectBidirectionalIterator<Object2ByteMap$Entry<K>>)
    // private i: ObjectBidirectionalIterator<Object2ByteMap$Entry<K>>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): K;
    previous(): K;
    skip(arg0: number): number;
}
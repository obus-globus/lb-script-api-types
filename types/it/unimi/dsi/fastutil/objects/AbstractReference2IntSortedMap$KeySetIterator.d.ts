import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Reference2IntMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2IntMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractReference2IntSortedMap$KeySetIterator<K extends Object | number | string | boolean> extends Object implements ObjectBidirectionalIterator<K> {
    constructor(arg0: ObjectBidirectionalIterator<Reference2IntMap$Entry<K>>)
    // private i: ObjectBidirectionalIterator<Reference2IntMap$Entry<K>>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): K;
    previous(): K;
    skip(arg0: number): number;
}
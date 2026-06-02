import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Reference2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractReference2ReferenceSortedMap$KeySetIterator<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object implements ObjectBidirectionalIterator<K> {
    constructor(arg0: ObjectBidirectionalIterator<Reference2ReferenceMap$Entry<K, V>>)
    // private i: ObjectBidirectionalIterator<Reference2ReferenceMap$Entry<K, V>>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next(): K;
    previous(): K;
    skip(arg0: number): number;
}
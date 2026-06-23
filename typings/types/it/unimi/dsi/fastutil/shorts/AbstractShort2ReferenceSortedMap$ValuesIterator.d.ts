import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Short2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractShort2ReferenceSortedMap$ValuesIterator<V extends unknown> extends Object implements ObjectIterator<V> {
    constructor(arg0: ObjectBidirectionalIterator<Short2ReferenceMap$Entry<V>>)
    // private i: ObjectBidirectionalIterator<Short2ReferenceMap$Entry<V>>;
    hasNext(): boolean;
    next(): V;
    skip(arg0: number): number;
}
import type { Int2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ReferenceMap$Entry.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractInt2ReferenceSortedMap$ValuesIterator<V extends Object | number | string | boolean> extends Object implements ObjectIterator<V> {
    constructor(arg0: ObjectBidirectionalIterator<Int2ReferenceMap$Entry<V>>)
    // private i: ObjectBidirectionalIterator<Int2ReferenceMap$Entry<V>>;
    hasNext(): boolean;
    next(): V;
    skip(arg0: number): number;
}
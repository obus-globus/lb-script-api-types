import type { Object2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceMap$Entry.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractObject2ReferenceSortedMap$ValuesIterator<K extends unknown, V extends unknown> extends Object implements ObjectIterator<V> {
    constructor(arg0: ObjectBidirectionalIterator<Object2ReferenceMap$Entry<K, V>>)
    // private i: ObjectBidirectionalIterator<Object2ReferenceMap$Entry<K, V>>;
    hasNext(): boolean;
    next(): V;
    skip(arg0: number): number;
}
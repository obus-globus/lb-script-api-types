import type { Byte2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectMap$Entry.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractByte2ObjectSortedMap$ValuesIterator<V extends unknown> extends Object implements ObjectIterator<V> {
    constructor(arg0: ObjectBidirectionalIterator<Byte2ObjectMap$Entry<V>>)
    // private i: ObjectBidirectionalIterator<Byte2ObjectMap$Entry<V>>;
    hasNext(): boolean;
    next(): V;
    skip(arg0: number): number;
}
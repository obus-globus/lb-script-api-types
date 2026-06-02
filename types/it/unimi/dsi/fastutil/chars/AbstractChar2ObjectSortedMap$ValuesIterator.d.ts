import type { Char2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectMap$Entry.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractChar2ObjectSortedMap$ValuesIterator<V extends Object | number | string | boolean> extends Object implements ObjectIterator<V> {
    constructor(arg0: ObjectBidirectionalIterator<Char2ObjectMap$Entry<V>>)
    // private i: ObjectBidirectionalIterator<Char2ObjectMap$Entry<V>>;
    hasNext(): boolean;
    next(): V;
    skip(arg0: number): number;
}
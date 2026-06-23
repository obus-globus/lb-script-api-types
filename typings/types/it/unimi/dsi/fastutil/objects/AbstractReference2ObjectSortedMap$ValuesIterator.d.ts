import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { ObjectIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractReference2ObjectSortedMap$ValuesIterator<K extends unknown, V extends unknown> extends Object implements ObjectIterator<V> {
    constructor(arg0: ObjectBidirectionalIterator<Reference2ObjectMap$Entry<K, V>>)
    // private i: ObjectBidirectionalIterator<Reference2ObjectMap$Entry<K, V>>;
    hasNext(): boolean;
    next(): V;
    skip(arg0: number): number;
}
import type { ObjectBidirectionalIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { ObjectIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectIterator.d.ts'
import type { Reference2ObjectMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Reference2ObjectMap$Entry.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AbstractReference2ObjectSortedMap$ValuesIterator<K extends unknown, V extends unknown> extends Object implements ObjectIterator<V> {
    constructor(arg0: ObjectBidirectionalIterator<Reference2ObjectMap$Entry<K, V>>)
    // private i: ObjectBidirectionalIterator<Reference2ObjectMap$Entry<K, V>>;
    hasNext(): boolean;
    next(): V;
    skip(arg0: number): number;
}
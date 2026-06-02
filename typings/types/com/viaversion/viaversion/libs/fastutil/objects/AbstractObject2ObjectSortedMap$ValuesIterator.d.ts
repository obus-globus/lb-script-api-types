import type { Object2ObjectMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2ObjectMap$Entry.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { ObjectIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectIterator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AbstractObject2ObjectSortedMap$ValuesIterator<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object implements ObjectIterator<V> {
    constructor(arg0: ObjectBidirectionalIterator<Object2ObjectMap$Entry<K, V>>)
    // private i: ObjectBidirectionalIterator<Object2ObjectMap$Entry<K, V>>;
    hasNext(): boolean;
    next(): V;
    skip(arg0: number): number;
}
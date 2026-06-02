import type { Int2ObjectMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2ObjectMap$Entry.d.ts'
import type { IntBidirectionalIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/IntBidirectionalIterator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AbstractInt2ObjectSortedMap$KeySetIterator<V extends Object | number | string | boolean> extends Object implements IntBidirectionalIterator {
    constructor(arg0: ObjectBidirectionalIterator<Int2ObjectMap$Entry<V>>)
    // private i: ObjectBidirectionalIterator<Int2ObjectMap$Entry<V>>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    skip(arg0: number): number;
}
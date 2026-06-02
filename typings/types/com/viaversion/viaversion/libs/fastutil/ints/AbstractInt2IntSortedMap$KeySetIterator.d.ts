import type { Int2IntMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntMap$Entry.d.ts'
import type { IntBidirectionalIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/IntBidirectionalIterator.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AbstractInt2IntSortedMap$KeySetIterator extends Object implements IntBidirectionalIterator {
    constructor(arg0: ObjectBidirectionalIterator<Int2IntMap$Entry>)
    // private i: ObjectBidirectionalIterator<Int2IntMap$Entry>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    skip(arg0: number): number;
}
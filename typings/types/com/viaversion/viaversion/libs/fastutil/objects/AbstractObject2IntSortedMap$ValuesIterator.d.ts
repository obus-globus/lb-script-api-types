import type { IntConsumer } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/IntConsumer.d.ts'
import type { IntIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/IntIterator.d.ts'
import type { Object2IntMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2IntMap$Entry.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AbstractObject2IntSortedMap$ValuesIterator<K extends unknown> extends Object implements IntIterator {
    constructor(arg0: ObjectBidirectionalIterator<Object2IntMap$Entry<K>>)
    // private i: ObjectBidirectionalIterator<Object2IntMap$Entry<K>>;
    forEachRemaining(arg0: (param0: number) => void): void;
    hasNext(): boolean;
    next(): number;
    nextInt(): number;
    skip(arg0: number): number;
}
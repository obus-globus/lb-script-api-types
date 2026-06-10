import type { ObjectIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectIterator.d.ts'
import type { ObjectSpliterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectSpliterator.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ObjectSpliterators$IteratorFromSpliterator<K extends Object | number | string | boolean> extends Object implements ObjectIterator<K>, Consumer<K> {
    constructor(arg0: ObjectSpliterator<K>)
    // private hasPeeked: boolean;
    // private holder: K;
    // private spliterator: ObjectSpliterator<K>;
    accept(arg0: K): void;
    andThen(arg0: (param0: K) => void): (param0: K) => void;
    forEachRemaining(arg0: (param0: K) => void): void;
    hasNext(): boolean;
    next(): K;
    skip(arg0: number): number;
}
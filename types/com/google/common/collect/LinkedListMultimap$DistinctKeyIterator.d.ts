import type { LinkedListMultimap$Node } from '../../../../com/google/common/collect/LinkedListMultimap$Node.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class LinkedListMultimap$DistinctKeyIterator extends Object implements Iterator<K> {
    private constructor(null_: LinkedListMultimap$DistinctKeyIterator)
    // private current: LinkedListMultimap$Node<K, V>;
    // private expectedModCount: number;
    // private next: LinkedListMultimap$Node<K, V>;
    // private seenKeys: K[];
    // private checkForConcurrentModification(): void;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next<K extends Object | number | string | boolean>(): K;
    remove(): void;
}
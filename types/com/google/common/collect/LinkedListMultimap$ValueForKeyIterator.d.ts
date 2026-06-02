import type { LinkedListMultimap$Node } from '../../../../com/google/common/collect/LinkedListMultimap$Node.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ListIterator } from '../../../../java/util/ListIterator.d.ts'
export class LinkedListMultimap$ValueForKeyIterator extends Object implements ListIterator<V> {
    constructor(null_: LinkedListMultimap$ValueForKeyIterator)
    constructor(null_: LinkedListMultimap$ValueForKeyIterator, index: number)
    // private current: LinkedListMultimap$Node<K, V>;
    // private key: K;
    // private next: LinkedListMultimap$Node<K, V>;
    // private nextIndex: number;
    // private previous: LinkedListMultimap$Node<K, V>;
    add<V extends Object | number | string | boolean>(value: V): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next<V extends Object | number | string | boolean>(): V;
    nextIndex(): number;
    previous<V extends Object | number | string | boolean>(): V;
    previousIndex(): number;
    remove(): void;
    set<V extends Object | number | string | boolean>(value: V): void;
}
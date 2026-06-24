import type { LinkedListMultimap } from '../../../../com/google/common/collect/LinkedListMultimap.d.ts'
import type { LinkedListMultimap$Node } from '../../../../com/google/common/collect/LinkedListMultimap$Node.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ListIterator } from '../../../../java/util/ListIterator.d.ts'
export class LinkedListMultimap$ValueForKeyIterator extends Object implements ListIterator<V> {
    constructor(null_: LinkedListMultimap<K, V>, key: K)
    constructor(null_: LinkedListMultimap<K, V>, key: K, index: number)
    // private current: LinkedListMultimap$Node<K, V>;
    // private key: K;
    // private next: LinkedListMultimap$Node<K, V>;
    // private nextIndex: number;
    // private previous: LinkedListMultimap$Node<K, V>;
    add<V extends unknown>(value: V): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next<V extends unknown>(): V;
    nextIndex(): number;
    previous<V extends unknown>(): V;
    previousIndex(): number;
    remove(): void;
    set<V extends unknown>(value: V): void;
}
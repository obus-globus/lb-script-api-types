import type { LinkedListMultimap$Node } from '../../../../com/google/common/collect/LinkedListMultimap$Node.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ListIterator } from '../../../../java/util/ListIterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class LinkedListMultimap$NodeIterator extends Object implements ListIterator<Map$Entry<K, V>> {
    constructor(null_: LinkedListMultimap$NodeIterator, index: number)
    // private current: LinkedListMultimap$Node<K, V>;
    // private expectedModCount: number;
    // private next: LinkedListMultimap$Node<K, V>;
    // private nextIndex: number;
    // private previous: LinkedListMultimap$Node<K, V>;
    add<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(e: Map$Entry<K, V>): void;
    // private checkForConcurrentModification(): void;
    hasNext(): boolean;
    hasPrevious(): boolean;
    next<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(): LinkedListMultimap$Node<K, V>;
    nextIndex(): number;
    previous<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(): LinkedListMultimap$Node<K, V>;
    previousIndex(): number;
    remove(): void;
    set<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(e: Map$Entry<K, V>): void;
    setValue<V extends Object | number | string | boolean>(value: V): void;
}
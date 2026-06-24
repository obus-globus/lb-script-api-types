import type { HashMap$Node } from '../../java/util/HashMap$Node.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class HashMap$HashIterator extends Object {
    constructor(null_: Map<K, V>)
    // private current: HashMap$Node<K, V>;
    // private expectedModCount: number;
    // private index: number;
    // private next: HashMap$Node<K, V>;
    hasNext(): boolean;
    nextNode<K extends unknown, V extends unknown>(): HashMap$Node<K, V>;
    remove(): void;
}
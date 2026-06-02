import type { HashMap$Node } from '../../java/util/HashMap$Node.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class HashMap$HashIterator extends Object {
    constructor(null_: HashMap$HashIterator)
    // private current: HashMap$Node<K, V>;
    // private expectedModCount: number;
    // private index: number;
    // private next: HashMap$Node<K, V>;
    hasNext(): boolean;
    nextNode(): HashMap$Node<K, V>;
    remove(): void;
}
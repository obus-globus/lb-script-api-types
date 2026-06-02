import type { Object2CharRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2CharRBTreeMap$TreeIterator extends Object {
    constructor(null_: Object2CharRBTreeMap$TreeIterator)
    constructor(null_: Object2CharRBTreeMap$TreeIterator)
    // private curr: Object2CharRBTreeMap$Entry<K>;
    // private index: number;
    // private next: Object2CharRBTreeMap$Entry<K>;
    // private prev: Object2CharRBTreeMap$Entry<K>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Object2CharRBTreeMap$Entry<K>;
    nextIndex(): number;
    previousEntry(): Object2CharRBTreeMap$Entry<K>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}
import type { Object2LongRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2LongRBTreeMap$TreeIterator extends Object {
    constructor(null_: Object2LongRBTreeMap$TreeIterator)
    constructor(null_: Object2LongRBTreeMap$TreeIterator)
    // private curr: Object2LongRBTreeMap$Entry<K>;
    // private index: number;
    // private next: Object2LongRBTreeMap$Entry<K>;
    // private prev: Object2LongRBTreeMap$Entry<K>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<K extends unknown>(): Object2LongRBTreeMap$Entry<K>;
    nextIndex(): number;
    previousEntry<K extends unknown>(): Object2LongRBTreeMap$Entry<K>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}
import type { Object2IntRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2IntRBTreeMap$TreeIterator extends Object {
    constructor(null_: Object2IntRBTreeMap$TreeIterator)
    constructor(null_: Object2IntRBTreeMap$TreeIterator)
    // private curr: Object2IntRBTreeMap$Entry<K>;
    // private index: number;
    // private next: Object2IntRBTreeMap$Entry<K>;
    // private prev: Object2IntRBTreeMap$Entry<K>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<K extends Object | number | string | boolean>(): Object2IntRBTreeMap$Entry<K>;
    nextIndex(): number;
    previousEntry<K extends Object | number | string | boolean>(): Object2IntRBTreeMap$Entry<K>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}
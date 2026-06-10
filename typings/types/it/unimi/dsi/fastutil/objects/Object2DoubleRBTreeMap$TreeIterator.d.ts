import type { Object2DoubleRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2DoubleRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2DoubleRBTreeMap$TreeIterator extends Object {
    constructor(null_: Object2DoubleRBTreeMap$TreeIterator)
    constructor(null_: Object2DoubleRBTreeMap$TreeIterator)
    // private curr: Object2DoubleRBTreeMap$Entry<K>;
    // private index: number;
    // private next: Object2DoubleRBTreeMap$Entry<K>;
    // private prev: Object2DoubleRBTreeMap$Entry<K>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<K extends Object | number | string | boolean>(): Object2DoubleRBTreeMap$Entry<K>;
    nextIndex(): number;
    previousEntry<K extends Object | number | string | boolean>(): Object2DoubleRBTreeMap$Entry<K>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}
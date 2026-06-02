import type { Int2DoubleRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2DoubleRBTreeMap$TreeIterator extends Object {
    constructor(null_: Int2DoubleRBTreeMap$TreeIterator)
    constructor(null_: Int2DoubleRBTreeMap$TreeIterator, arg1: number)
    // private curr: Int2DoubleRBTreeMap$Entry;
    // private index: number;
    // private next: Int2DoubleRBTreeMap$Entry;
    // private prev: Int2DoubleRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Int2DoubleRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Int2DoubleRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}
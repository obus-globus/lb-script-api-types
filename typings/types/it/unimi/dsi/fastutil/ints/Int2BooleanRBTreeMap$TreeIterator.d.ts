import type { Int2BooleanRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2BooleanRBTreeMap$TreeIterator extends Object {
    constructor(null_: Int2BooleanRBTreeMap$TreeIterator)
    constructor(null_: Int2BooleanRBTreeMap$TreeIterator, arg1: number)
    // private curr: Int2BooleanRBTreeMap$Entry;
    // private index: number;
    // private next: Int2BooleanRBTreeMap$Entry;
    // private prev: Int2BooleanRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Int2BooleanRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Int2BooleanRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}
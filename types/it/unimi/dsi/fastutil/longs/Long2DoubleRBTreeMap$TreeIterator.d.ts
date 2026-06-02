import type { Long2DoubleRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2DoubleRBTreeMap$TreeIterator extends Object {
    constructor(null_: Long2DoubleRBTreeMap$TreeIterator)
    constructor(null_: Long2DoubleRBTreeMap$TreeIterator, arg1: number)
    // private curr: Long2DoubleRBTreeMap$Entry;
    // private index: number;
    // private next: Long2DoubleRBTreeMap$Entry;
    // private prev: Long2DoubleRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Long2DoubleRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Long2DoubleRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}
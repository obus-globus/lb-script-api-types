import type { Long2IntRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2IntRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2IntRBTreeMap$TreeIterator extends Object {
    constructor(null_: Long2IntRBTreeMap$TreeIterator)
    constructor(null_: Long2IntRBTreeMap$TreeIterator, arg1: number)
    // private curr: Long2IntRBTreeMap$Entry;
    // private index: number;
    // private next: Long2IntRBTreeMap$Entry;
    // private prev: Long2IntRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Long2IntRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Long2IntRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}
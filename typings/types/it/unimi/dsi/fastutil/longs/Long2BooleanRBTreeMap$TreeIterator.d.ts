import type { Long2BooleanRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2BooleanRBTreeMap$TreeIterator extends Object {
    constructor(null_: Long2BooleanRBTreeMap$TreeIterator)
    constructor(null_: Long2BooleanRBTreeMap$TreeIterator, arg1: number)
    // private curr: Long2BooleanRBTreeMap$Entry;
    // private index: number;
    // private next: Long2BooleanRBTreeMap$Entry;
    // private prev: Long2BooleanRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Long2BooleanRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Long2BooleanRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}
import type { Long2LongRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2LongRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2LongRBTreeMap$TreeIterator extends Object {
    constructor(null_: Long2LongRBTreeMap$TreeIterator)
    constructor(null_: Long2LongRBTreeMap$TreeIterator, arg1: number)
    // private curr: Long2LongRBTreeMap$Entry;
    // private index: number;
    // private next: Long2LongRBTreeMap$Entry;
    // private prev: Long2LongRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Long2LongRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Long2LongRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}